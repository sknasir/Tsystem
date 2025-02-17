var ProductController = /** @class */ (function () {
    function ProductController($scope, $location, $routeParams, productservice) {
        this.$scope = $scope;
        this.$location = $location;
        this.$routeParams = $routeParams;
        this.productservice = productservice;
        this.message = 'Welcome to TypeScript!';
        // Fetch catalogs from ProductService
        this.fetchCatalogs();
        // Fetch the product by ID if productId is present in the route params
        var productId = $routeParams['productId'];
        if (productId) {
            this.fetchProductById(Number(productId));
        }
        else {
            this.selectedProduct = null;
        }
        $scope['data'] = this;
    }
    // Fetch catalogs from the product service
    ProductController.prototype.fetchCatalogs = function () {
        var _this = this;
        this.productservice.getCatalogs()
            .then(function (response) {
            _this.catalogs = response.data; // Assuming your API returns 'data'
        })
            .catch(function (error) {
            console.error('Error fetching catalogs:', error);
        });
    };
    // Fetch a product by ID from the product service
    ProductController.prototype.fetchProductById = function (productId) {
        var _this = this;
        debugger;
        this.productservice.getProductById(productId)
            .then(function (response) {
            _this.selectedProduct = response.data; // Assign the fetched product to the selectedProduct
        })
            .catch(function (error) {
            console.error('Error fetching product by ID:', error);
        });
    };
    // Function to add product to the cart
    ProductController.prototype.addToCart = function (product) {
        console.log('Product added to cart:', product);
        this.productservice.addToCart(product);
        alert("Product added to cart");
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
