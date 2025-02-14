var ProductController = /** @class */ (function () {
    function ProductController($scope, $location, $routeParams, productservice) {
        this.$scope = $scope;
        this.$location = $location;
        this.$routeParams = $routeParams;
        this.productservice = productservice;
        this.message = 'Welcome to TypeScript!';
        // Fetch catalogs from ProductService
        this.catalogs = this.productservice.getCatalogs();
        var productId = $routeParams['productId'];
        if (productId) {
            this.selectedProduct = this.productservice.getProductById(Number(productId));
        }
        else {
            this.selectedProduct = null;
        }
        $scope['data'] = this;
    }
    // Function to add product to the cart
    ProductController.prototype.addToCart = function (product) {
        console.log('Product added to cart:', product);
        this.productservice.addToCart(product);
    };
    // Function to add product to the cart
    ProductController.prototype.addToCartDetails = function (product) {
        console.log('Product added to cart:', product);
        this.productservice.addToCartDetails(product);
        this.$location.path('/cart'); // Redirect to catalog page
    };
    // Function to navigate to the details page for a product
    ProductController.prototype.viewProductDetails = function (productId) {
        this.$location.path("/product/".concat(productId));
    };
    ProductController.$inject = ['$scope', '$location', '$routeParams', 'ProductService'];
    return ProductController;
}());

