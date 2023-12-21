const koa = require('koa');

const app = new koa();

const bodyParser = require('koa-bodyparser');
const productRoutes = require('./router/products.routes');

app.use(bodyParser());
app.use(productRoutes.routes()).use(productRoutes.allowedMethods());

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Start on port ${PORT}`);
})