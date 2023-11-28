const prisma = require("../utils/prisma")

const authController = {
  registerUser: async (username, password) => {
    return await prisma.user.create({
      data : {
        username,
        password
      }
    })
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

