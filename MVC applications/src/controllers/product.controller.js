
import path from 'path';
import ProductModel from '../models/product.model.js';

export default class ProductController{
    getProducts(req, res,next)
    {
        console.log('present line 8');
        let products = ProductModel.getProducts();
        res.render("products",{product:products});
        // return res.sendFile(path.join(path.resolve(),'src','views','products.html'))
    }

    getAddForm(req, res, next){
       return res.render('new-product', {errors: null});
    }

    addNewProduct(req, res, next)
    {

        let products = ProductModel.getProducts();
        // console.log(req.body);
        
        ProductModel.addProducts(req.body)
        return res.render("products",{product:products});
    }

    getUpdateProductView(req,res, next)
    {
        //1. if product exists then return view
        // const id = req.body;
        // console.log(id);
        const id = req.params.id;
        console.log('from parent ',id);
        if (!id) {
            return;
        }
        const productFound = ProductModel.getProductById(id);
        //console.log("this is product now value is ",productFound)
       // console.log(id);
        if (!id) {
            return;
        }
        if(productFound)
        {
            
            return res.render('update-product',{product:productFound, errors:null});
            // return res.render()
        }
        else{
            return res.status(401).send('Product Not found'); 
        }
    }
}