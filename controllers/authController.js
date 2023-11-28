const prisma  = require("../utils/prisma")
const { generateHash }  = require("../utils/generateToken")

const registerUser = async (username, password) => {

  const hashpassword = await generateHash(password)
  
  return prisma.user.create({
    data: {
      username: username,
      password: hashpassword,
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



