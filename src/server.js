const { GraphQLServer } = require("graphql-yoga");
const { importSchema } = require("graphql-import");

const Web3 = require("./context/w3");
const resolvers = require("./resolvers");

const typeDefs = importSchema(__dirname + "/schemas/schema.graphql");

const options = {
  port: 8000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    web3: new Web3(),
  },
});
server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}/playground`)
);
