require "posts_services_pb"

module Grpc
  class PostsService < Asnp::Posts::Service
    def list(req, _call)
      posts = Post.all
      fields = req.fields
      posts_messages = resolve(Asnp::Post, posts, fields)
      Asnp::PostsListResponse.new({ posts: posts_messages })
    end

    private

    def resolve(message, records, fields)
      field_mask_node = FieldMaskNode.build(message, fields.paths)
      traverser = Traverser.new(records, field_mask_node)
      traverser.run
    end
  end
end

class Traverser
  attr_reader :record, :field_mask_node, :queue

  def initialize(record, field_mask_node)
    @record = record
    @field_mask_node = field_mask_node
  end

  def run
    @queue = []
    mapper_class = field_mask_node.mapper
    message_class = field_mask_node.descriptor.msgclass
    @result = []
    Array.wrap(record).each do |rec|
      mapper = mapper_class.new(rec)
      message = message_class.new
      @result << message
      @queue << {
        mapper: mapper,
        message: message,
        node: field_mask_node,
      }
    end
    while task = @queue.shift
      consume_task(task)
    end
    if record.is_a?(Enumerable)
      @result
    else
      @result.first
    end
  end

  def consume_task(task)
    mapper, message, node = task.values_at(:mapper, :message, :node)
    node.children.each do |field, child_node|
      if child_node.has_child?
        value = mapper.public_send(field)
        mapper_class = child_node.mapper
        message_class = child_node.descriptor.msgclass
        if child_node.repeated
          value.each do |val|
            child_mapper = mapper_class.new(val)
            child_message = message_class.new
            message[field] << child_message
            @queue << {
              mapper: child_mapper,
              message: child_message,
              node: child_node,
            }
          end
        else
          child_mapper = mapper_class.new(value)
          child_message = message_class.new
          message[field] = child_message
          @queue << {
            mapper: child_mapper,
            message: child_message,
            node: child_node,
          }
        end
      else
        message[field] = mapper.public_send(field)
      end
    end
  end
end

class FieldMaskNode
  attr_reader :field_descriptor, :descriptor, :repeated, :children

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
    @repeated = repeated.nil? ? field_descriptor.label == :repeated : repeated
  end

  def add_child(name)
    return children[name] if children[name]
    fd = descriptor.find{|f| f.name == name }
    child_node = self.class.new(field_descriptor: fd)
    children[name] = child_node
    child_node
  end

  def mapper
    klass = descriptor.name.split('.').last
    "#{klass}Mapper".constantize
  end

  def has_child?
    !@descriptor.nil?
  end
end

class BaseMapper
  attr_reader :record, :message

  def initialize(record, message = nil)
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

  def posts
    BatchLoader.for(record.id).batch do |ids, loader|
      Post.where(user_id: ids).group_by(&:user_id).each do |user_id, posts|
        loader.call(user_id, posts)
      end
    end
  end
end
