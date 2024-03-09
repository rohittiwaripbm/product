import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import {addProductsMiddleware} from './src/middlewares/addProducts.middleware.js'
import path from 'path';
import ejslayout from 'express-ejs-layouts';
const server = express();




//forms data;

server.use(express.urlencoded({extended:true}))
//setting view engine
server.set('view engine','ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));

server.use(ejslayout);
//create instence

const productController = new ProductController();

server.get('/',productController.getProducts);
server.get('/new', productController.getAddForm);
server.post('/',productController.addNewProduct);
server.get('/update-product/:id',productController.getUpdateProductView);

server.use(express.static('src/views'));

function handle404Error(req, res, next) {
    res.status(404).render("error");
}

// Register the 404 error handler middleware
server.use(handle404Error);
server.listen(3200,()=>{
    console.log('server is listening at 3200');
});