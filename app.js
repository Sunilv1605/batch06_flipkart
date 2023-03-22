const express = require("express");
const app = express()
const bodyparser = require("body-parser");
const mainRouter = require('./router/mainRouter');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', mainRouter);

app.listen(3005, function (req, res) {
    console.log("server started at port 3005")
})