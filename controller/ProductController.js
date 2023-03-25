const productModel = require("../model/ProductModel");
const categoryModel = require("../model/CategoryModel");

class ProductController {

    constructor() { }

    async productPage(req, res) {
        try {
            let page = {
                title: "Products",
                pageName: "product",
                products: [],
                categories: []
            }
            let categoryResult = await categoryModel.getAllCategories();
            let productResult = await productModel.getAllProducts();
            page.categories = categoryResult;
            page.products = productResult;
            res.render('admin/template', page);
        } catch (error) {
            console.log("Get Category Page", error);
        }
    }

    async createProduct(req, res) {
        try {
            const title = req.body.title;
            const price = req.body.price;
            const quantity = req.body.quantity;
            const description = req.body.description;
            const categoryId = req.body.categoryId;
            let product = {
                title: title,
                price: price,
                quantity: quantity,
                description: description,
                categoryId: categoryId,
                images: ''
            };
            await productModel.insertProduct(product);
            res.redirect('/admin/products');
        } catch (error) {
            console.log("Create Product Error", error);
        }
    }

}

module.exports = new ProductController();