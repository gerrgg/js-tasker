const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");

const bcrypt = require("bcrypt");

const User = require("../models/user");
const Task = require("../models/task");

const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  typeDef: `
  type Token {
    value: String!,
  }`,
  resolvers: {
    Query: {
      me: (root, args, { currentUser }) => currentUser,
      myTasks: async (root, args, { currentUser }) => {
        if (!currentUser) throw new AuthenticationError("You must login first");

        const tasks = await Task.find({ user: currentUser.id }).populate(
          "user"
        );

        return tasks;
      },
    },
    Mutation: {
      login: async (root, args) => {
        const user = await User.findOne({ username: args.username });

        if (!user) {
          throw new UserInputError("wrong credentials");
        }

        const match = await bcrypt.compare(args.password, user.passwordHash);

        if (!match) {
          throw new UserInputError("wrong credentials");
        }

        const userForToken = {
          username: user.username,
          id: user._id,
        };

        return { value: jwt.sign(userForToken, JWT_SECRET) };
      },
    },
  },
};
