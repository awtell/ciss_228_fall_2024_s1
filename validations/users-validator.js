const { check } = require('express-validator');

const insertUserValidation = [
  check('userName').notEmpty().withMessage('User Name is required'),
  check('userUserName').notEmpty().withMessage('User Username is required'),
  check('userEmail').isEmail().withMessage('Invalid Email'),
  check('userPassword').notEmpty().withMessage('User Password is required'),
  // more validators as needed
];

module.exports = {
  insertUserValidation,
};
