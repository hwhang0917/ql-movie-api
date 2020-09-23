import { ApolloServer } from "apollo-server";
import { ApolloServer as ApolloServerLambda } from "apollo-server-lambda";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

export const createLambdaServer = (): ApolloServerLambda =>
  new ApolloServerLambda({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });

export const createLocalServer = (): ApolloServer =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
