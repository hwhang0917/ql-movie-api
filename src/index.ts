import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "src/graphql/schema.graphql",
  resolvers,
});

server.start(() =>
  console.log(`✅ GraphQL server is running on http://localhost:4000`)
);
