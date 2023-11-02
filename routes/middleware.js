const jwt = require("jsonwebtoken");

// middleware function
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token === null){
        // 401 Unauthorized
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user)=>{
        if(err){
            // 403 Forbidden
            return res.sendStatus(403)
        }
        req.user = user;
    });
    next();
}

module.exports = authenticateToken;