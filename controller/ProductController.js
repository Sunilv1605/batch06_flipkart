const productModel = require("../model/ProductModel");
const categoryModel = require("../model/CategoryModel");
const commonServices = require("../services/CommonServices");

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

            /** 
             * Upload Image on the server
             */
            const allImages = req.files.productImages;
            let allImageNames = [];
            if (allImages) {
                for (let index = 0; index < allImages.length; index++) {
                    let singleImage = allImages[index];
                    console.log("Before singleImage", singleImage);
                    const imageNewName = await commonServices.generateImageName(singleImage.name);
                    singleImage.name = imageNewName;
                    console.log("After singleImage", singleImage);
                    await commonServices.uploadImage(singleImage);
                    allImageNames.push(imageNewName);
                }
                console.log("allImageNames", allImageNames);
                product.images = allImageNames.toString(',');
            }
            await productModel.insertProduct(product);
            res.redirect('/admin/products');
        } catch (error) {
            console.log("Create Product Error", error);
        }
    }

}

module.exports = new ProductController();