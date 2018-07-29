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
