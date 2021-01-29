const bcrypt = require("bcrypt");
const { UserInputError } = require("apollo-server-express");
const User = require("../models/user");

module.exports = {
  typeDef: `
  type User {
    username: String!,
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

      removeUser: async (root, args) => {
        const user = User.findById(args.id);

        if (!user) {
          throw new UserInputError("user not found", {
            invalidArgs: args.id,
          });
        }

        await User.findByIdAndRemove(args.id);
        return user;
      },
    },
  },
};
