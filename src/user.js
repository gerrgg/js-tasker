const bcrypt = require("bcrypt");
const { UserInputError } = require("apollo-server-express");
const User = require("../models/user");

module.exports = {
  typeDef: `
  type User {
    username: String!,
    passwordHash: String!,
    id: ID!
  }`,
  resolvers: {
    Query: {
      allUsers: async (root, args) => User.find({}),
    },
    Mutation: {
      addUser: async (root, args) => {
        const hash = await bcrypt.hash(args.password, 10);

        const user = new User({ username: args.username, passwordHash: hash });

        return user.save().catch((error) => {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          });
        });
      },
    },
  },
};
