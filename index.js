const express = require("express");
const config = require("./database/config");
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

const ejs = require("ejs");

const port = process.env.PORT || 3001;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));

const users = require('./routes/users.routes');
const clients = require('./routes/client.routes');
const typi = require('./routes/typi.routes');
const { getTypicode, insertTypiCodes } = require("./services/fetchData");
const { query } = require("./database/db");

app.get("/", async (req, res)=>{
    const users = await query("select * from users");
    const data = {
        message: "test message",
        content: "this is the content",
        users: users,
    }
    //res.status(200).json({data});
    res.render('index', data);
});


app.use('/api/users', users);
app.use('/api/clients', clients);
app.use('/api/typi', typi);








app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);

})

