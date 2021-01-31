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
          throw new UserInputError("task does not exist", {
            invalidArgs: args.id,
          });
        }

        // if user null or task's user matches current user
        if (!task.user || String(task.user) === String(currentUser._id)) {
          return Task.findByIdAndRemove(args.id);
        }

        throw new AuthenticationError("You are not allowed to do that!");
      },

      updateTaskPriority: async (root, args, { currentUser }) => {
        if (!currentUser) throw new AuthenticationError("You must login first");

        const task = await Task.findById(args.id);

        if (!task) {
          throw new UserInputError("task does not exist", {
            invalidArgs: args.id,
          });
        }

        try {
          task.priority = args.priority;
          return task.save();
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args.priority,
          });
        }
      },

      updateTaskContent: async (root, args, { currentUser }) => {
        if (!currentUser) throw new AuthenticationError("You must login first");

        const task = await Task.findById(args.id);

        if (!task) {
          throw new UserInputError("task does not exist", {
            invalidArgs: args.id,
          });
        }

        try {
          task.content = args.content;
          return task.save();
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args.content,
          });
        }
      },

      updateTaskComplete: async (root, args, { currentUser }) => {
        if (!currentUser) throw new AuthenticationError("You must login first");

        const task = await Task.findById(args.id);

        if (!task) {
          throw new UserInputError("task does not exist", {
            invalidArgs: args.id,
          });
        }

        try {
          task.complete = args.complete;
          return task.save();
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args.complete,
          });
        }
      },

      updateTaskDueDate: async (root, args, { currentUser }) => {
        if (!currentUser) throw new AuthenticationError("You must login first");

        const task = await Task.findById(args.id);

        if (!task) {
          throw new UserInputError("task does not exist", {
            invalidArgs: args.id,
          });
        }

        try {
          task.due = args.due;
          return task.save();
        } catch (error) {
          throw new UserInputError(error.message, {
            invalidArgs: args.complete,
          });
        }
      },
    },
  },
};
