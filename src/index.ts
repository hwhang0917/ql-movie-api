import { GraphQLServer, GraphQLServerLambda } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import * as path from "path";
// import graphQLStringSchema from "./schema";

const schema: string = path.resolve(__dirname, "graphql", "schema.graphql");

if (process.env.NODE_ENV === "production") {
  // Serverless function for production
  const lambda = new GraphQLServerLambda({
    typeDefs: "./graphql/schema.graphql",
    resolvers,
  });
  exports.handler = lambda.handler;
} else if (process.env.NODE_ENV === "development") {
  // GraphQL playground server for development
  const server = new GraphQLServer({
    typeDefs: schema,
    resolvers,
  });

  const options = { port: 4000 };

  server.start(() =>
    console.log(
      options,
      `✅ GraphQL server is running on http://localhost:${options.port}`
    )
  );
}
