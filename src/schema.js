const { merge } = require("lodash");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const { typeDef: User, resolvers: userResolvers } = require("./user");
const { typeDef: Token, resolvers: tokenResolvers } = require("./token");
const { typeDef: Task, resolvers: taskResolvers } = require("./task");

const Query = `
  type Query {
    allTasks: [Task!]
    me: User
    allUsers: [User!]
  }
`;

const Mutation = `
  type Mutation {

    addUser(
      username: String!
      password: String!
    ): User!

    removeUser(
      id: String!
    ): User

    addTask(
      content: String!
      due: String
      priority: Boolean
    ): Task!

    removeTask(
      id: String!
    ): Task

    togglePriority(
      id: String!
      priority: Boolean!
    ): Task

    login(username: String!, password: String!): Token
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, User, Token, Task],
  resolvers: merge(userResolvers, tokenResolvers, taskResolvers),
});

module.exports = schema;
