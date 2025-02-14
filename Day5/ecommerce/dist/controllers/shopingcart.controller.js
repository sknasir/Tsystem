var ShoppingCartController = /** @class */ (function () {
    function ShoppingCartController($scope, cartService, checkoutService, authService, $location) {
        this.$scope = $scope;
        this.cartService = cartService;
        this.checkoutService = checkoutService;
        this.authService = authService;
        this.$location = $location;
        this.message = 'Welcome to TypeScript!';
        // Load the cart using the CartService
        this.cart = this.cartService.loadCart();
        $scope['data'] = this;
    }
    // Calculate total price
    ShoppingCartController.prototype.getTotalPrice = function () {
        return this.cart.reduce(function (total, item) { return total + item.price; }, 0);
    };
    ShoppingCartController.prototype.checkout = function () {
        // Here, you'd collect the user's information (e.g., from a form). This is just a sample.
        var userDetails = this.authService.getuserdetails();
        var checkoutResult = this.checkoutService.processCheckout(this.cart, userDetails);
        if (checkoutResult === 'Order successfully processed. Thank you for your purchase!') {
            this.cartService.clearCart(); // Clear the cart after successful checkout
            this.$location.path('/thank-you'); // Redirect to the "Thank You" page
        }
        else {
            alert(checkoutResult);
            this.$location.path('/auth'); // Redirect to the "Thank You" page
        }
    };
    // Remove an item from the cart
    ShoppingCartController.prototype.removeFromCart = function (index) {
        this.cartService.removeFromCart(this.cart, index); // Use CartService to remove and update the cart
    };
    ShoppingCartController.$inject = ['$scope', 'CartService', 'CheckoutService', 'Authservice', '$location'];
    return ShoppingCartController;
}());

