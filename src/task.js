const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");

const Task = require("../models/task");

module.exports = {
  typeDef: `
  type Task {
    content: String!,
    created: String!,
    due: String,
    priority: Boolean,
    complete: Boolean!,
    late: Boolean!
  }`,
  resolvers: {
    Query: {
      allTasks: async (root, args) => Task.find({}),
    },
    Mutation: {
      addTask: async (root, args) => {
        const task = new Task({
          content: args.content,
          due: args.due,
          priority: args.priority ? args.priority : false,
        });

        return task.save().catch((error) => {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          });
        });
      },
    },
  },
};
