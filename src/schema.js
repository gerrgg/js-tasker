const { merge } = require("lodash");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const { typeDef: User, resolvers: userResolvers } = require("./user");

const Query = `
  type Query {
    allUsers: [User!]
    userCount: Int!
  }
`;

const Mutation = `
  type Mutation {
    addUser(
      name: String!
      password: String!
    ): User!
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, Mutation, User],
  resolvers: merge(userResolvers),
});

module.exports = schema;
