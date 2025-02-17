var ProductService = /** @class */ (function () {
    function ProductService($http) {
        this.$http = $http;
        this.apiUrl = 'http://localhost:3000/api/'; // Backend API URL
    }
    // Method to get all products
    ProductService.prototype.getCatalogs = function () {
        debugger;
        return this.$http.get(this.apiUrl + "catalogs")
            .then(function (response) { return response; })
            .catch(function (error) {
            console.error('Error occurred:', error);
            throw error;
        });
    };
    // Method to get a product by its ID
    ProductService.prototype.getProductById = function (productId) {
        debugger;
        return this.$http.get(this.apiUrl + "catalogs/" + productId)
            .then(function (response) { return response; })
            .catch(function (error) {
            console.error('Error occurred:', error);
            throw error;
        });
    };
    // Method to add a product to the cart (using sessionStorage)
    ProductService.prototype.addToCart = function (product) {
        debugger;
        var cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        var existingProduct = cart.find(function (item) { return item.id === product.id; });
        if (existingProduct) {
            existingProduct.quantity += 1; // If product exists, increase its quantity
        }
        else {
            product.quantity = 1; // Set quantity to 1 if it's a new product
            cart.push(product); // Add the product to the cart
        }
        sessionStorage.setItem('cart', JSON.stringify(cart));
        //cart.push(product);
        // sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    ProductService.prototype.addToCartDetails = function (product) {
        var cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    return ProductService;
}());
