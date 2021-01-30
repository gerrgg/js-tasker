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
    user: User
  }`,
  resolvers: {
    Query: {
      allTasks: async (root, args) => Task.find({}),
    },
    Mutation: {
      addTask: async (root, args, { currentUser }) => {
        const task = new Task({
          content: args.content,
          due: args.due,
          priority: args.priority ? args.priority : false,
          user: currentUser,
        });

        console.log(task);

        return task.save().catch((error) => {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          });
        });
      },
    },
  },
};
