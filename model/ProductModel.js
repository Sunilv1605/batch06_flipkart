const { connection } = require("../config/MysqlConfig");

class ProductModel {
    constructor() { }

    async insertProduct(data) {
        return new Promise(function (resolve, reject) {
            let insertQry = `INSERT INTO products (title, price, quantity, description, category_id, images) VALUES('${data.title}', '${data.price}', '${data.quantity}', '${data.description}', '${data.categoryId}', '${data.images}')`;
            connection.query(insertQry, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        })
    }

    async getAllProducts(data) {
        return new Promise(function (resolve, reject) {
            let insertQry = `SELECT * FROM products`;
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
module.exports = new ProductModel();