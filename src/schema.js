const { merge } = require("lodash");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const { typeDef: User, resolvers: userResolvers } = require("./user");
const { typeDef: Token, resolvers: tokenResolvers } = require("./token");

const Query = `
  type Query {
    me: User
    allUsers: [User!]
    userCount: Int!
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

    login(username: String!, password: String!): Token
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, User, Token],
  resolvers: merge(userResolvers, tokenResolvers),
});

module.exports = schema;
