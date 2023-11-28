const { prisma } = require("../utils/prisma")

const authController = {
  register: async () => {
    return prisma.user.create({
      data: {
        username,
        password,
      },
    });
  },
  loginUser: async (username, password) => {
    return prisma.user.findUnique({
      where: {
        username,
        password,
      },
    });
  }
}

module.exports = authController

