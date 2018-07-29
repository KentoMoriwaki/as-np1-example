require "posts_services_pb"

module Grpc
  class PostsService < Asnp::Posts::Service
    include Grgr::GrpcServiceHelper

    def list(req, _call)
      posts = Post.all
      posts_messages = map_collection(Asnp::Post, posts, req.fields)
      Asnp::PostsListResponse.new({ posts: posts_messages })
    end

    def get(req, _call)
      post = Post.find(req.id)
      map_resource(Asnp::Post, post, req.fields)
    end
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
