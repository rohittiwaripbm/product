export const addProductsMiddleware = (req, res, next) => {
    console.log('in add product middleware')
    const { name, desc, price, imageUrl } = req.body;
    let err = [];
    if (!name || name?.trim() == '') {
        err.push('The name should not be empty');
    }
    if (!desc || desc?.trim() == '') {
        err.push('The description should not be empty');
    }

    if (!price || parseFloat(price) < 1) {
        err.push('Price should be greater than 0 or a non-negative value');
    }
    console.log(parseFloat(price))
    try {
        let url = new URL(imageUrl);
    } catch (error) {
        err.push('should be a valid link for image');
    }
    if (err.length > 0) {
        return res.render('new-product', { errors: err })
    }
    next();
}

