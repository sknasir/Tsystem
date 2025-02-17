var AuthController = /** @class */ (function () {
    function AuthController($scope, $location, authservice, checkoutService) {
        this.$scope = $scope;
        this.$location = $location;
        this.authservice = authservice;
        this.checkoutService = checkoutService;
        this.message = "";
        this.username = "";
        this.password = "";
        this.checkAuth();
        $scope['data'] = this;
    }
    AuthController.prototype.login = function () {
        var _this = this;
        this.authservice.login(this.username, this.password)
            .then(function (response) {
            // Check if response contains the message
            _this.message = response.message; // Success message from backend
            if (_this.checkoutService.isCart()) {
                _this.checkoutService.CartReady();
                _this.$location.path('/cart'); // Redirect to product
            }
            else {
                _this.$location.path('/product'); // Redirect to product
            }
        })
            .catch(function (error) {
            // Handle error message from backend
            _this.message = error.message || 'Something went wrong!';
        });
    };
    AuthController.prototype.checkAuth = function () {
        var userDetails = this.authservice.getuserdetails();
        this.userinfo = userDetails;
        if (this.userinfo) {
            this.username = this.userinfo.email;
            this.password = this.userinfo.password;
        }
    };
    AuthController.$inject = ['$scope', '$location', 'Authservice', 'CheckoutService'];
    return AuthController;
}());