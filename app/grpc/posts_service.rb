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
  attr_reader :records, :field_mask_node

  def initialize(records, field_mask_node)
    @records = records
    @field_mask_node = field_mask_node
  end

  def run
    traverse(field_mask_node, records)
  end

  def traverse(parent_node, record)
    if record.is_a?(Enumerable)
      record.map{|r| traverse(parent_node, r) }
    else
      mapper = parent_node.mapper.new(record)
      msg = parent_node.descriptor.msgclass.new
      parent_node.children.each do |field, child_node|
        ret = if child_node.has_child?
          traverse(child_node, mapper.public_send(field))
        else
          mapper.public_send(field)
        end
        msg[field] = ret
      end
      msg
    end
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
end
