const ProductService = require('../service/product.service');

class ProductsController {
    service = new ProductService();
    createProduct = async ({name,description, qty, price}) => {
        const product = {
            name,
            description,
            qty,
            price
        }

        return await this.service.save(product)
    }

    getProducts = async () => {
        return await this.service.getAll();
    }

    getProduct = async (id) => {
        return await this.service.getById(id);
    }

    deleteProduct = async id => {
        return await this.service.removeById(id);
    }

    updateProduct = async (id, {name, description, qty, price}) => {
        return await this.service.update(id, {name, description, price, qty});
    }
}

module.exports = ProductsController

