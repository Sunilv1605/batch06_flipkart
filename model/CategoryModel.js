const { connection } = require("../config/MysqlConfig");

class CategoryModel {
    constructor() { }

    async insertCategory(data) {
        return new Promise(function (resolve, reject) {
            let insertQry = `INSERT INTO category (title, description, parent_id) VALUES('${data.title}', '${data.description}', '${data.parentId}')`
            connection.query(insertQry, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        })
    }

    async getAllCategories(data) {
        return new Promise(function (resolve, reject) {
            let insertQry = `SELECT * FROM category`;
            connection.query(insertQry, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        })
    }
}
module.exports = new CategoryModel();