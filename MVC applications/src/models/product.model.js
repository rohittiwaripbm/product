export default class ProductModel{
    constructor(_id, _name, _desc,_price, _imageurl)
    {
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageurl = _imageurl;
    }

    static getProducts()
    {
        return products;
    }

    static addProducts(productObj)
    {
        let newProduct = new ProductModel(products.length+1, productObj.name,productObj.desc, productObj.price,  productObj.imageUrl);
        products.push(newProduct);
    }
    static getProductById(id)
    {
        console.log('from model : ', id);
        return products.find((p)=>p.id==id);
    }
}

const products = [
    new ProductModel(1, "Product 1", "Description of Product 1", 19.99, "https://media.istockphoto.com/id/1495664030/photo/sneakers-on-dark-gray-concrete-background-texture-of-the-old-dark-stone-or-broken-brick-the.webp?b=1&s=170667a&w=0&k=20&c=X6_aRYTqlF8VA_apfu6fTmCS6PRmAhFQOUD81eXyDQk="),
    new ProductModel(2, "Product 2", "Description of Product 2", 29.99, "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"),
    new ProductModel(3, "Product 3", "Description of Product 3", 39.99, "https://images.unsplash.com/photo-1525904097878-94fb15835963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww"),
    new ProductModel(4, "Product 4", "Description of Product 4", 49.99, "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww"),
    new ProductModel(5, "Product 5", "Description of Product 5", 59.99, "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D")
];