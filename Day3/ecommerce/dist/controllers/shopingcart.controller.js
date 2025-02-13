var ShoppingCartController = /** @class */ (function () {
    function ShoppingCartController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to TypeScript!';
        this.users = [
            { name: 'Shaikh Nasir', email: 'nasir@gmail.com' },
        ];
        $scope['data'] = this;
    }
    ShoppingCartController.$inject = ['$scope'];
    return ShoppingCartController;
}());

//angular.module('myApp').controller('MyController', MyController);
