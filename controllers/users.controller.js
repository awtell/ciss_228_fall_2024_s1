const { validationResult } = require('express-validator');
const { getUsers, insertUser } = require('../services/users.services');

const getUsersController = async (req, res) => {
  try {
    res.status(200).json({ users: await getUsers() });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

const insertUserController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);
  const {
    userName,
    userUserName,
    userEmail,
    userPassword,
    userDob,
    userMobileNumber,
    userDescription,
    userAddress,
  } = req.body;

  try {
    const result = await insertUser(
      userName,
      userUserName,
      userEmail,
      userPassword,
      userDob,
      userMobileNumber,
      userDescription,
      userAddress
    );
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};

module.exports = {
  getUsersController,
  insertUserController,
};
