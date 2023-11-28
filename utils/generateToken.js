const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const generateHash = (password) => {
  return bcrypt.hash(password, 12)
}

module.exports = {
  generateToken,
  generateHash
};

