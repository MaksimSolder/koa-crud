const Router = require('@koa/router');

const ProductsController = require('../controller/products.controller');

const router = new Router({
    prefix:'/products'
})
const controller = new ProductsController();
//GET request
router.get('/', async (ctx) => {
    ctx.body = await controller.getProducts();
})

//POST request
router.post('/', async (ctx) => {
    let product = ctx.request.body;
    product = await controller.createProduct(product);
    ctx.response.status = 200;
    ctx.body = product;
})

router.get('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await controller.getProduct(id);
})

router.delete('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await controller.deleteProduct(id);
})

router.put('/:id', async (ctx) => {
    const id = ctx.params.id;
    let product = ctx.request.body;
    product = await controller.updateProduct(id, product);
    ctx.response.status = 200;
    ctx.body = product;
})

module.exports = router;