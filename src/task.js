const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");

const Task = require("../models/task");

module.exports = {
  typeDef: `
  type Task {
    id: ID!,
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
      allTasks: async (root, args) => Task.find({}).populate("user"),
    },
    Mutation: {
      addTask: async (root, args, { currentUser }) => {
        const task = new Task({
          content: args.content,
          due: args.due,
          priority: args.priority ? args.priority : false,
          user: currentUser,
        });

        return task.save().catch((error) => {
          throw new UserInputError(error.message, {
            invalidArgs: args,
          });
        });
      },

      removeTask: async (root, args, { currentUser }) => {
        if (!currentUser) throw new AuthenticationError("You must login first");

        const task = await Task.findById(args.id);

        if (!task) {
          throw new UserInputError("task not found", {
            invalidArgs: args.id,
          });
        }

        console.log(task.user, currentUser._id);

        if (String(task.user) === String(currentUser._id)) {
          return Task.findByIdAndRemove(args.id);
        }

        throw new AuthenticationError("You are not allowed to do that!");
      },
    },
  },
};
