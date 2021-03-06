# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: posts.proto

require 'google/protobuf'

require 'google/protobuf/field_mask_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "asnp.Profile" do
    optional :id, :uint64, 1
    optional :introduction, :string, 2
  end
  add_message "asnp.User" do
    optional :id, :uint64, 1
    optional :name, :string, 2
    optional :profile, :message, 3, "asnp.Profile"
    repeated :posts, :message, 4, "asnp.Post"
  end
  add_message "asnp.Post" do
    optional :id, :uint64, 1
    optional :title, :string, 2
    optional :description, :string, 3
    optional :user, :message, 4, "asnp.User"
  end
  add_message "asnp.PostsListResponse" do
    repeated :posts, :message, 1, "asnp.Post"
  end
  add_message "asnp.PostsListRequest" do
    optional :fields, :message, 1, "google.protobuf.FieldMask"
    optional :message, :string, 2
  end
  add_message "asnp.PostGetRequest" do
    optional :id, :uint64, 1
    optional :fields, :message, 2, "google.protobuf.FieldMask"
  end
end

module Asnp
  Profile = Google::Protobuf::DescriptorPool.generated_pool.lookup("asnp.Profile").msgclass
  User = Google::Protobuf::DescriptorPool.generated_pool.lookup("asnp.User").msgclass
  Post = Google::Protobuf::DescriptorPool.generated_pool.lookup("asnp.Post").msgclass
  PostsListResponse = Google::Protobuf::DescriptorPool.generated_pool.lookup("asnp.PostsListResponse").msgclass
  PostsListRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("asnp.PostsListRequest").msgclass
  PostGetRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("asnp.PostGetRequest").msgclass
end
