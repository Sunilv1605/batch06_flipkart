const express = require("express");
const app = express();
const adminRouter = require("./admin/adminRouter");

app.use("/admin", adminRouter);


/* END : ADMIN PNALE */

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

module.exports = app;