// routes/authRoutes.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const authResolver = require('../resolvers/authResolver');
const typeDefs = require('../graphql/schema');

const router = express.Router();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [authResolver],
});

const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({ req, res }),
});

const startServer = async () => {
  await server.start()
  server.applyMiddleware({ app: router, path: '/graphql' });
}
startServer()

module.exports = router;

