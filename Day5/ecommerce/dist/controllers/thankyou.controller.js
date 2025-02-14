var ThankYouController = /** @class */ (function () {
    function ThankYouController($scope) {
        this.$scope = $scope;
        this.message = 'Thank you for your purchase! Your order has been successfully processed.';
        // Expose the data to the scope for the view
        $scope['data'] = this;
    }
    ThankYouController.$inject = ['$scope'];
    return ThankYouController;
}());

