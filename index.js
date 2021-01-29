require("dotenv").config();
require("./utils/database");

const express = require("express");

// APOLLO-SERVER
const { ApolloServer } = require("apollo-server-express");

// SCHEMA
const executableSchema = require("./src/schema");

// AUTHORIZATION
const authorization = require("./utils/auth");

//SERVER
const server = new ApolloServer({
  schema: executableSchema,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null;
    return authorization.verify(auth);
  },
});

const app = express();

// APPLY MIDDLEWARE
app.use(express.static("build"));

server.applyMiddleware({ app, path: "/api" });

const PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
