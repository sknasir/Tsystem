var AuthController = /** @class */ (function () {
    function AuthController($scope, $location) {
        this.$scope = $scope;
        this.$location = $location;
        this.message = "";
        this.username = "";
        this.password = "";
        // Sample users with email and password
        this.authUsers = [
            { email: 'nasir@gmail.com', password: "12345" },
            { email: 'rakesh@gmail.com', password: "123456" },
            { email: 'akshay@gmail.com', password: "1234567" },
            { email: 'swapnil@gmail.com', password: "12345678" },
        ];
        $scope['data'] = this;
    }
    AuthController.prototype.login = function () {
        var userFound = false;
        // Loop through the authUsers array to find a match
        for (var _i = 0, _a = this.authUsers; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.email === this.username && user.password === this.password) {
                userFound = true;
                this.message = 'Login Successful';
                this.$location.path('/product'); // Redirect to catalog page
                break; // Exit the loop once we find a match
            }
        }
        // If no user is found, show an error message
        if (!userFound) {
            this.message = 'Invalid credentials';
        }
    };
    AuthController.$inject = ['$scope', '$location'];
    return AuthController;
}());

