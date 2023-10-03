const { query } = require("../database/db")
const { getUsers, insertUser } = require("../services/users.services")

const getUsersController = async(req, res)=>{
    try{
        res.status(200).json({users: await getUsers()});
    }catch(error){
        res.status(500).json({message: error?.message});
    }
}

const insertUserController = async (req, res) =>
{
    console.log(req.body);
    const {
        userName,
        userUserName,
        userEmail,
        userPassword,
        userDob,
        userMobileNumber,
        userDescription,
        userAddress
    } = req.body;
    if(
        userName || userName !== ''
        || userUserName || userUserName !== ''
        || userEmail || userEmail !== ''
        || userPassword || userPassword !== ''
        )
    {
        return res.status(400).json({message: "missing data"});
    }

    try{
        const result = await insertUser(userName,
            userUserName,
            userEmail,
            userPassword,
            userDob,
            userMobileNumber,
            userDescription,
            userAddress);
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({message: error?.message});
    }
}

module.exports = {
    getUsersController,
    insertUserController,
}