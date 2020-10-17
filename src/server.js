
const { GraphQLServer } = require("graphql-yoga");
const { importSchema } = require('graphql-import')
const resolvers = require("./resolvers");
const typeDefs = importSchema(__dirname + "/schemas/schema.graphql");

const options = {
  port: 8000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, ({ port }) =>
  console.log(`Server is running on localhost:${port}`)
);
