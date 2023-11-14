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

app.get("/", async (req, res)=>{
    const data = {
        message: "Hello EJS",
        content: "You are a templating language used in nodejs"
    }

    res.render('index', data);
});


app.use('/api/users', users);
app.use('/api/clients', clients);
app.use('/api/typi', typi);








app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);

})

