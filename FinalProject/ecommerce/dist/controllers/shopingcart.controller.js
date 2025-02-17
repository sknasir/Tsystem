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
        var _this = this;
        //return this.cart.reduce((total, item) => total + item.price, 0);
        var total = 0;
        this.cart.forEach(function (item) {
            total += _this.getItemTotalPrice(item); // Use getItemTotalPrice method
        });
        return total;
    };
    // Function to get the total price of a cart item
    ShoppingCartController.prototype.getItemTotalPrice = function (item) {
        return item.price * item.quantity; // Multiply price by quantity
    };
    // Function to increase quantity of a product
    ShoppingCartController.prototype.increaseQuantity = function (index) {
        this.cart[index].quantity += 1; // Increase quantity of the item
        this.saveCart(); // Save updated cart to sessionStorage
    };
    // Function to decrease quantity of a product
    ShoppingCartController.prototype.decreaseQuantity = function (index) {
        if (this.cart[index].quantity > 1) { // Prevent going below quantity 1
            this.cart[index].quantity -= 1; // Decrease quantity of the item
            this.saveCart(); // Save updated cart to sessionStorage
        }
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
    // Function to save the current cart to sessionStorage
    ShoppingCartController.prototype.saveCart = function () {
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
    };
    // Remove an item from the cart
    ShoppingCartController.prototype.removeFromCart = function (index) {
        this.cartService.removeFromCart(this.cart, index); // Use CartService to remove and update the cart
    };
    ShoppingCartController.$inject = ['$scope', 'CartService', 'CheckoutService', 'Authservice', '$location'];
    return ShoppingCartController;
}());