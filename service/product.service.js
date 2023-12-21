const {ObjectId} = require("mongodb");
class ProductService {
    objectId = require('mongodb').ObjectId;
    products = require('../db/orm').db('koacrud').collection('products');
    save = async ({name, description, qty, price}) => {
        const result = await this.products.insertOne({
            name,
            description,
            qty,
            price
        });

        return result.acknowledged;
    }

    getAll = async () => {
        const cursor = await this.products.find().sort();
        return cursor.toArray();
    }

    getById = async (id) => {
        return await this.products.findOne({_id: new this.objectId(id)});
    }

    update = async (id, {name, description, qty, price}) => {
        const result = await this.products.replaceOne({_id: new this.objectId(id, {
                name,
                description,
                price,
                qty})});
        return result.acknowledged;
    }
    removeById = async (id) => {
        return await this.products.deleteOne({_id: new this.objectId(id)})
    }
}

module.exports = ProductService