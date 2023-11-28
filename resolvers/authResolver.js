const { registerUser, loginUser } = require('../controllers/authController');
const { generateToken } = require('../utils/generateToken');

const authResolver = {
  Mutation: {
    register: async (_, { username, password }) => {
      const user = await registerUser(username, password);
      const token = generateToken(user.id);
      return { token, user };
    },
    login: async (_, { username, password }) => {
      const user = await loginUser(username, password);
      if (!user) {
        throw new Error('Invalid username or password');
      }
      const token = generateToken(user.id);
      return { token, user };
    },
  },
};

module.exports = authResolver;

