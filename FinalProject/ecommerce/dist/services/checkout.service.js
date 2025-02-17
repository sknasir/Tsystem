var CheckoutService = /** @class */ (function () {
    function CheckoutService() {
        this.isCartReady = false;
    } // Initial value }
    // Method to process the checkout (mocked payment processing)
    CheckoutService.prototype.processCheckout = function (cart, userDetails) {
        // Here you could add logic to save the order in a database or process payment.
        // This is a mock of a successful checkout.
        if (!cart || cart.length === 0) {
            return 'Your cart is empty. Cannot proceed with the checkout.';
        }
        if (!userDetails || !userDetails.email || !userDetails.password) {
            this.isCartReady = true;
            return 'Please provide valid user details for the checkout.';
        }
        // Example: "Payment Processing" logic
        var orderConfirmation = this.saveOrder(cart, userDetails);
        return orderConfirmation; // Mocked confirmation message
    };
    // Save the order and return confirmation
    CheckoutService.prototype.saveOrder = function (cart, userDetails) {
        // In a real scenario, this would save the order to a database.
        console.log('Order saved successfully with the following details:', {
            cart: cart,
            userDetails: userDetails
        });
        // Return a mock order confirmation message
        return 'Order successfully processed. Thank you for your purchase!';
    };
    CheckoutService.prototype.isCart = function () {
        return this.isCartReady;
    };
    CheckoutService.prototype.CartReady = function () {
        this.isCartReady = false;
    };
    return CheckoutService;
}());