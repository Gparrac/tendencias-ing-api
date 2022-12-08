const express = require('express');
const categoryRouter = require('./category.router');
const markRouter = require('./mark.router');
const sellerRouter = require('./seller.router');


function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/category',categoryRouter);
    router.use('/mark',markRouter);
    router.use('/seller',sellerRouter);
    
    
}

module.exports = routerApi;