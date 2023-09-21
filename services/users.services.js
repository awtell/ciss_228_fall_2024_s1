const { query } = require("../database/db");



const getUsers = async() => {
    let sql = `SELECT * FROM users`;
    const users = await query(sql);
    return users;
}

const getUser = (id) =>{
    let sql = `SELECT * FROM users WHERE user_id = ?`;
    const user = query(sql, [id]);
    return user;
} 

const insertUser = (user) =>{
    const {user_name, user_username, user_email, user_password, user_dob} = user;
    let sql = `INSERT INTO user 
    (user_name, user_username, user_email, user_password, user_dob)
    VALUES
    (?, ?, ?, ?, ?);
    `;
    const result = query(
        sql, 
        [user_name, user_username, user_email, user_password, moment(user_dob).format("YYYY-MM-DD")]);
}

module.exports = {
    getUsers,
    getUser,
    insertUser,
}