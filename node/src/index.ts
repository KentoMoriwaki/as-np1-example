import { ApolloServer, gql } from "apollo-server";
import fs from "fs";
import path from "path";

const generatedSchema = fs.readFileSync(
  path.resolve(__dirname, "../generated/asnp.graphql"),
  { encoding: "utf-8" }
);

// The GraphQL schema
const typeDefs = gql`
  ${generatedSchema}
  type Query {
    "A simple type for getting started!"
    hello: Post!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => ({
      id: 1,
      title: "kento"
    })
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
