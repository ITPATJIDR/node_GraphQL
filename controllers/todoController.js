const { createTodo, getTodosByUserId } = require('../controllers/todoController');
const { authMiddleware } = require('../middelware/authMiddleware');

const todoResolver = {
  Mutation: {
    createTodo: async (_, { text }, context) => {
      const userId = authMiddleware(context);
      return createTodo(userId, text);
    },
  },
  Query: {
    todos: async (_, __, context) => {
      const userId = authMiddleware(context);
      return getTodosByUserId(userId);
    },
  },
};

module.exports = todoResolver;
