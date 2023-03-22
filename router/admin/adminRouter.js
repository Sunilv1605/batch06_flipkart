const express = require("express");
const app = express();
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123$$",
    database: "flipkart"
});
connection.connect(function (error) {
    if (error) {
        console.log("Unable to connect with database", error);
    } else {
        console.log("Database Connected");
    }
});

/* admin penal START  */
app.get('/', function (req, res) {
    let page = {
        title: "home",
        pageName: "home"
    }

    res.render('admin/template', page);
});
app.get('/login', function (req, res) {
    let page = {
        title: "login",
        pageName: "login"
    }

    res.render('admin/login', page);
});

app.get('/category', function (req, res) {
    let page = {
        title: "allCategory",
        pageName: "allCategory"
    }
    res.render('admin/template', page);
});

app.post('/category', function (req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const parentId = req.body.parentId;
    let insertQry = `INSERT INTO category (title, description, parent_id) VALUES('${title}', '${description}', '${parentId}')`
    connection.query(insertQry, function(error, result){
        if(error){
            console.log("Database query error", error);
        } else {
            res.redirect('/admin/category');
        }
    });
});

module.exports = app;