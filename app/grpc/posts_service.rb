require "posts_services_pb"

module Grpc
  class PostsService < Asnp::Posts::Service
    def list(req, _call)
      posts = [Asnp::Post.new, Asnp::Post.new]
      Asnp::PostsListResponse.new({ posts: posts })
    end
  end
end
