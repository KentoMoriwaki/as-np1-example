import { ApolloServer, gql } from "apollo-server";
import fs from "fs";
import path from "path";
import grpc from "grpc";
import { FieldMask } from "google-protobuf/google/protobuf/field_mask_pb";

import messages from "../generated/posts_pb";
import services from "../generated/posts_grpc_pb";

const client = new services.PostsClient(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

const generatedSchema = fs.readFileSync(
  path.resolve(__dirname, "../generated/asnp.graphql"),
  { encoding: "utf-8" }
);

// The GraphQL schema
const typeDefs = gql`
  ${generatedSchema}
  type Query {
    "A simple type for getting started!"
    hello: [Post!]!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: (root, args, context, info) => {
      const fields = new FieldMask();
      fields.setPathsList([
        "id",
        "title",
        "user.id",
        "user.name",
        "user.profile.introduction",
        "user.posts.id",
        "user.posts.description"
      ]);
      const req = new messages.PostsListRequest();
      req.setFields(fields);
      return new Promise((resolve, reject) => {
        client.list(req, (err, res) => {
          if (err) {
            reject(err);
          } else {
            // console.log(root, args, context, info);
            resolve(res.toObject().postsList);
          }
        });
      });
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
