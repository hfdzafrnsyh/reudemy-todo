const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000



// dotenv
require('dotenv').config();


// cors
app.use(cors());

// static public
app.use(express.static('public'));

// express json
app.use(express.json());

// view engine
app.set("view engine" , "ejs");

// routes
const routes = require("./routes/routes");
routes(app);

app.listen( port , () => {
    console.log(`Server run in port:${port}`);
})
