import { ApolloServer, gql } from "apollo-server";
import fs from "fs";
import path from "path";
import grpc from "grpc";
import { FieldMask } from "google-protobuf/google/protobuf/field_mask_pb";
import { FieldNode, visit } from "graphql/language";

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

function makeFieldMask(fields: Array<FieldNode>): FieldMask {
  const fm = new FieldMask();
  const pathsList: Array<string> = [];
  fields.forEach(field => {
    const stacked: string[] = [];
    visit(field, {
      enter: {
        Field(node) {
          stacked.push(node.name.value);
        }
      },
      leave: {
        Field(node) {
          const path = stacked.slice(1).join(".");
          if (path) {
            pathsList.push(path);
          }
          stacked.splice(-1, 1);
        }
      }
    });
  });
  fm.setPathsList(pathsList);
  return fm;
}

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: (root, args, context, info) => {
      const req = new messages.PostsListRequest();
      req.setFields(makeFieldMask(info.fieldNodes));
      return new Promise((resolve, reject) => {
        client.list(req, (err, res) => {
          if (err) {
            reject(err);
          } else {
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
