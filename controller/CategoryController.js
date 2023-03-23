const categoryModel = require("../model/CategoryModel");

class CategoryController {

    constructor() { }

    async categoryPage(req, res) {
        try {
            let page = {
                title: "allCategory",
                pageName: "allCategory",
                categories: []
            }
            let categoryResult = await categoryModel.getAllCategories();
            page.categories = categoryResult;
            console.log("categoryResult", categoryResult);
            res.render('admin/template', page);
        } catch (error) {
            console.log("Get Category Page", error);
        }
    }

    async createCategory(req, res) {
        try {
            const title = req.body.title;
            const description = req.body.description;
            const parentId = req.body.parentId;
            let category = {
                title: title,
                description: description,
                parentId: parentId
            };
            await categoryModel.insertCategory(category);
            res.redirect('/admin/category');
        } catch (error) {
            console.log("Create Category Error", error);
        }
    }

}

module.exports = new CategoryController();