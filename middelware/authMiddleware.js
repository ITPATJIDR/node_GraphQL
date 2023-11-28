// utils/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (context) => {
  const { req } = context;
  const token = req.cookies.token;
  if (!token) {
    throw new Error('Authentication required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

module.exports = {
  authMiddleware,
};

