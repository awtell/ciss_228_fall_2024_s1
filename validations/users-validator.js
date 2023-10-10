const { check } = require('express-validator');

const insertUserValidation = [
  check('userName').notEmpty().withMessage('User Name is required'),
  check('userUserName').notEmpty().withMessage('User Username is required'),
  check('userEmail').isEmail().withMessage('Invalid Email Format'),
  check('userPassword').notEmpty().withMessage('User Password is required'),
  //check('userPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  check('userPassword').isStrongPassword().withMessage("You entered a weak pwd"),
  // more validators as needed
];

const updateUserValidation = [
  check('userId').notEmpty().withMessage('User id cannot be empty'),
  check('userName').notEmpty().withMessage('User Name is required'),
  check('userUserName').notEmpty().withMessage('User Username is required'),
  check('userEmail').isEmail().withMessage('Invalid Email Format'),
  check('userPassword').notEmpty().withMessage('User Password is required'),
  //check('userPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  check('userPassword').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i"),
  // more validators as needed
];

module.exports = {
  insertUserValidation,
  updateUserValidation,
};
