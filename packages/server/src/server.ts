import { resolvers } from "./schema/resolvers.generated";
import { typeDefs } from "./schema/typeDefs.generated";
import { createYoga, createSchema } from "graphql-yoga";
import { createServer } from "node:http";

const yoga = createYoga({ schema: createSchema({ typeDefs, resolvers }) });
const server = createServer(yoga);

server.listen(3000).on("listening", () => {
    console.log("Go to http://localhost:3000/graphql");
});
