const bodyParser = require("body-parser");
const express = require("express");
const app = express()
const bodyparser = require("body-parser");
const { Template } = require("ejs");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({ extended: false }));

/* START: USER DESHBOARD */
app.get('/', function (req, res) {
    let page = {
        title: "home",
        pageName: "home"
    }

    res.render('user/template', page);
});

app.get('/login', function (req, res) {
    let page = {
        title: "login",
        pageName: "login"
    }

    res.render('user/template', page);
});

app.get('/myCart', function (req, res) {
    let page = {
        title: "myCart",
        pageName: "myCart"
    }

    res.render('user/template', page);

});

app.get('/profile', function (req, res) {
    let page = {
        title: "profile",
        pageName: "profile"
    }

    res.render('user/template', page);
});
/* END :  USER DESHBOARD */







/* admin penal START  */
app.get('/admin', function (req, res) {
    let page = {
        title: "home",
        pageName: "home"
    }

    res.render('admin/template', page);
});
app.get('/admin/login', function (req, res) {
    let page = {
        title: "login", 
        pageName: "login"
    }

    res.render('admin/login', page);
});

app.get('/admin/allCategory', function (req, res) {
    let page = {
        title: "allCategory",
        pageName: "allCategory"
    }

    res.render('admin/template', page);

});
/* END : ADMIN PNALE */
app.listen(3005, function(req, res){
    console.log("server started at port 3005")
})