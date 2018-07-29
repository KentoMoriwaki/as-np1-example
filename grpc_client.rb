stub = Asnp::Posts::Stub.new("127.0.0.1:8080", :this_channel_is_insecure)
field_mask = Google::Protobuf::FieldMask.new(paths: [
  "id",
  "title",
  "user.id",
  "user.name",
  "user.profile.introduction",
  "user.posts.id",
  "user.posts.title",
  "user.posts.description"
])
res = stub.list(Asnp::PostsListRequest.new(fields: field_mask))
# res = stub.get(Asnp::PostGetRequest.new(id: 1, fields: field_mask))
p res
