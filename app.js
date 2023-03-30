const express = require("express");
const app = express()
const bodyparser = require("body-parser");
const expressSession = require("express-session");
const mainRouter = require('./router/mainRouter');
const fileupload = require("express-fileupload");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(fileupload());
app.use(expressSession({
    secret: "flikart121212@435341",
    resave: false,
    saveUninitialized: false,
}));


app.use('/', mainRouter);

app.listen(3005, function (req, res) {
    console.log("server started at port 3005")
})