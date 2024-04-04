const express = require("express");
const router = require("./routes/routes");
require('dotenv').config();
const app = express();

app.set('view engine', 'ejs');
app.set('/views', 'views');
let port = process.env.PORT

app.use('/', router);


app.listen(port, ()=>{
    console.log("Server Running.... 8086");
})