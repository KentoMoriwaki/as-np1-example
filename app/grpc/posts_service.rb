require "posts_services_pb"

module Grpc
  class PostsService < Asnp::Posts::Service
    def list(req, _call)
      posts = Post.all
      fields = req.fields
      posts_messages = resolve_mapping(Asnp::Post, posts, fields)
      Asnp::PostsListResponse.new({ posts: posts_messages })
    end

    private

    def resolve_mapping(message, records, fields)
      resolver = Resolver.new(message, records, fields)
      resolver.resolve
    end

    def transform(record, message)
      res = message.new
      message.descriptor.each do |fd|
        if fd.submsg_name
          res[fd.name] = transform(record.public_send(fd.name), fd.subtype.msgclass)
        else
          res[fd.name] = record.public_send(fd.name)
        end
      end
      res
    end
  end
end

class Resolver
  attr_reader :message_type, :records, :fields

  def initialize(message_type, records, fields)
    @message_type = message_type
    @records = records
    @fields = fields
    @root_node = FieldMaskNode.build(message_type, fields.paths)
  end

  def resolve
    records.map do |record|
      target = message_type.new
      fields.paths.each_index do |path, index|
        cur_target = target
        cur_record = record
        path.split('.').each do |field|
          msg = cur_target.class.descriptor.index_by{|f| f.name }[field]
          mapper = get_mapper_from_message(cur_target.class.descriptor).new(cur_record, msg)
          val = mapper.public_send(field)
          if msg.submsg_name
            cur_target[field] = msg.subtype.msgclass.new
          else
            cur_target[field] = cur_record.public_send(field)
          end
          cur_target = cur_target[field]
          cur_record = val
        end
      end
      target
    end
  end

  def get_model_from_message(message)
    name = message.name
    klass = name.split('.').last
    klass.constantize
  end

  def get_mapper_from_message(message)
    name = message.name
    klass = name.split('.').last
    "#{klass}Mapper".constantize
  end
end

class FieldMaskNode
  attr_reader :field_descriptor, :descriptor, :children

  def self.build(message, paths)
    node = self.new(descriptor: message.descriptor, repeated: true)
    paths.each do |path|
      current_node = node
      path.split(".").each do |field|
        current_node = current_node.add_child(field)
      end
    end
    node
  end

  def initialize(
    descriptor: nil,
    field_descriptor: nil,
    children: {},
    repeated: nil
  )
    @descriptor = descriptor
    @field_descriptor = field_descriptor
    @children = children
    if field_descriptor && field_descriptor.type == :message
      @descriptor = field_descriptor.subtype
    end
    unless repeated.nil?
      @repeated = repeated
    end
  end

  def add_child(name)
    return children[name] if children[name]
    fd = descriptor.find{|f| f.name == name }
    child_node = self.class.new(field_descriptor: fd)
    children[name] = child_node
    child_node
  end

  def repeated?
    return @repeated if defined?(@repeated)
    field_descriptor.label == :repeated
  end
end

class BaseMapper
  attr_reader :record, :message

  def initialize(record, message)
    @record = record
    @message = message
  end

  def method_missing(meth)
    @record.public_send(meth)
  end
end

class PostMapper < BaseMapper
  def user
    BatchLoader.for(record.user_id).batch do |ids, loader|
      User.where(id: ids).each{|user| loader.call(user.id, user) }
    end
  end
end

class ProfileMapper < BaseMapper
  def cover_post
    return nil unless record.cover_post_id
    BatchLoader.for(record.cover_post_id).batch do |ids, loader|
      Post.where(id: ids).each{|post| loader.call(post.id, post) }
    end
  end
end

class UserMapper < BaseMapper
  def profile
    BatchLoader.for(record.id).batch do |ids, loader|
      Profile.where(user_id: ids).each{|profile| loader.call(profile.user_id, profile) }
    end
  end
end
