const { query } = require("../database/db")
const { getUsers } = require("../services/users.services")

const getUsersController = async(req, res)=>{
    /**
     * Any missing data return
     */
    res.status(200).json({users: await getUsers()});
}

module.exports = {
    getUsersController,
}