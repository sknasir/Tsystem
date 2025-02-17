var CartService = /** @class */ (function () {
    function CartService() {
    }
    // Save the current cart to sessionStorage
    CartService.prototype.saveCart = function (cart) {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    };
    // Load the cart from sessionStorage
    CartService.prototype.loadCart = function () {
        var storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            return JSON.parse(storedCart);
        }
        return []; // If no cart is stored, return an empty array
    };
    // Remove an item from the cart by index
    CartService.prototype.removeFromCart = function (cart, index) {
        cart.splice(index, 1);
        this.saveCart(cart); // Update sessionStorage after removing an item
    };
    CartService.prototype.clearCart = function () {
        sessionStorage.removeItem('cart');
    };
    return CartService;
}());
