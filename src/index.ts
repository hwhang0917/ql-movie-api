import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import * as path from "path";

const schema: string = path.resolve(__dirname, "graphql", "schema.graphql");

const server = new GraphQLServer({
  typeDefs: schema,
  resolvers,
});

server.start(() =>
  console.log(`✅ GraphQL server is running on http://localhost:4000`)
);
