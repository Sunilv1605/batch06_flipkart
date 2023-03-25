const express = require("express");
const app = express();
const categoryController = require("../../controller/CategoryController");
const productController = require("../../controller/ProductController");



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

app.get('/category', categoryController.categoryPage);

app.post('/category', categoryController.createCategory);

app.get('/products', productController.productPage);

app.post('/product', productController.createProduct);

module.exports = app;