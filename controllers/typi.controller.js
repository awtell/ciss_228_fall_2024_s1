const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');
const { getTypicodeByUserID, insertTypiCodes, insertPostsByUserID } = require("../services/fetchData");



const getTypiCodeByUserIdController = async (req, res) => {
  try {
    const {userId} = req.body;
    if(!userId){
      return res.status(401).json({message: "missing userId"});
    }
    res.status(200).json({ users: await getTypicodeByUserID(userId) });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};
const insertTypiCodeByUserIdController = async (req, res) => {
  try {
    const {userId} = req.body;
    if(!userId){
      return res.status(401).json({message: "missing userId"});
    }
    res.status(200).json({ users: await insertPostsByUserID(userId) });
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
};



module.exports = {
  getTypiCodeByUserIdController,
  insertTypiCodeByUserIdController
};
