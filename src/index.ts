import { createLocalServer, createLambdaServer } from "./server";

if (process.env.NODE_ENV === "development") {
  const server = createLocalServer();

  server.listen().then(({ url }) => {
    console.log(`✅ Server ready at: ${url}`);
  });
} else if (process.env.NODE_ENV === "production") {
  const server = createLambdaServer();

  exports.handler = server.createHandler({
    cors: {
      origin: "*",
    },
  });
}
