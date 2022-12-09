const { User } = require("../../db.js");

const createUser = async ({ fullName, password, phoneNumber, emailAdress }) => {
  try {
    //Create user
    const [userDB, createdUserDB] = await User.findOrCreate({
      where: { fullName },
      defaults: {
        fullName,
        password,
        phoneNumber,
        emailAdress,
      },
    });

    return createdUserDB
      ? "Usuario creado."
      : "Ya existe un usuario con ese nombre.";
  } catch (error) {
    return error;
  }
};

module.exports = { createUser };
