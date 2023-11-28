const { prisma } = require("../utils/prisma")

const registerUser = async (username, password) => {
  return prisma.user.create({
    data: {
      username,
      password,
    },
  });
};

const loginUser = async (username, password) => {
  return prisma.user.findUnique({
    where: {
      username,
      password,
    },
  });
};

module.exports = {
  registerUser,
  loginUser,
};

