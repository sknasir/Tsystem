var ShoppingCartController = /** @class */ (function () {
    function ShoppingCartController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to TypeScript!';
        this.cart = this.loadCart();
        debugger;
        $scope['data'] = this;
    }
    ShoppingCartController.prototype.removeFromCart = function (index) {
        this.cart.splice(index, 1);
        this.saveCart(); // Update sessionStorage after removing an item
    };
    // Save the current cart to sessionStorage
    ShoppingCartController.prototype.saveCart = function () {
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
    };
    ShoppingCartController.prototype.loadCart = function () {
        var storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            return JSON.parse(storedCart);
        }
        return []; // If no cart is stored, return an empty array
    };
    ShoppingCartController.$inject = ['$scope'];
    return ShoppingCartController;
}());

//angular.module('myApp').controller('MyController', MyController);
