const axios = require("axios");


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


module.exports = {
    insertTypiCodes,
    getTypicode,
    getTypicodeByUserID,
}