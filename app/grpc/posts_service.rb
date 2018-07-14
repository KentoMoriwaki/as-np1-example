require "posts_services_pb"

module Grpc
  class PostsService < Asnp::Posts::Service
    def list(req, _call)
      # posts = [Asnp::Post.new, Asnp::Post.new]
      posts = Post.all
      posts_messages = posts.map do |post|
        transform(post, Asnp::Post)
      end
      Asnp::PostsListResponse.new({ posts: posts_messages })
    end

    private

    def transform(record, message)
      res = message.new
      message.descriptor.each do |fd|
        res[fd.name] = record.public_send(fd.name)
      end
      res
    end
  end
end
