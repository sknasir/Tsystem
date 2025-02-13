var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to Transflower TypeScript!';
        this.users = [
            { name: 'Shaikh Nasir', email: 'nasir@gmail.com' },
        ];
        $scope['vm'] = this;
    }
    MyController.$inject = ['$scope'];
    return MyController;
}());
//angular.module('myApp').controller('MyController', MyController);
