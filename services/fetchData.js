const axios = require("axios");
const { query } = require("../database/db");


const getTypicode = async() =>{
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const result = await axios.get(URL);
    return result?.data;
}

const insertTypiCodes = async() =>{
    const posts = await getTypicode();
    return posts;
}

const getTypicodeByUserID = async(userID) => {

    let arr = [];
    const posts = await getTypicode();
    for(let post of posts)
    {
        console.log(post?.userId, userID);
        if(Number(post?.userId) === Number(userID)){
            arr.push(post);
        }
    }
    return arr;
}

const insertPostsByUserID = async (userID) => {

    try {
        const posts = await getTypicodeByUserID(userID);
        for (let post of posts) {
            let sql = `INSERT INTO typicode (user_id, id, title, body) 
    VALUES (?, ?, ?, ?)`;
    console.log(sql);
            await query(sql, [post?.userId, post?.id, post?.title, post?.body]);
        }
        return "success";
    } catch (error) {
        throw new Error(error);
    }

}


module.exports = {
    insertTypiCodes,
    getTypicode,
    getTypicodeByUserID,
    insertPostsByUserID,
}