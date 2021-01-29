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
      addUser: (root, args) => {
        const user = new User({ ...args });

        return user.save().catch((error) => {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          });
        });
      },
    },
  },
};
