# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: posts.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "asnp.Post" do
    optional :id, :uint32, 1
    optional :title, :string, 2
    optional :introduction, :string, 3
  end
  add_message "asnp.PostsListResponse" do
    repeated :posts, :message, 1, "asnp.Post"
  end
  add_message "asnp.PostsListRequest" do
    optional :message, :string, 1
  end
end

module Asnp
  Post = Google::Protobuf::DescriptorPool.generated_pool.lookup("asnp.Post").msgclass
  PostsListResponse = Google::Protobuf::DescriptorPool.generated_pool.lookup("asnp.PostsListResponse").msgclass
  PostsListRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("asnp.PostsListRequest").msgclass
end
