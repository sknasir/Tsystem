var Authservice = /** @class */ (function () {
    function Authservice($http) {
        this.$http = $http;
        this.apiUrl = 'http://localhost:3000/api/login'; // Backend API URL
    }
    // Method to authenticate users
    Authservice.prototype.login = function (email, password) {
        var credentials = { email: email, password: password };
        return this.$http.post(this.apiUrl, credentials)
            .then(function (response) {
            // Ensure the response has a 'message' field
            if (response.data && response.data.message) {
                sessionStorage.setItem('auth', JSON.stringify(credentials));
                return response.data;
            }
            else {
                throw new Error('Message not found in response');
            }
        })
            .catch(function (error) {
            var _a;
            // Log the error and return a default message if error structure is different
            console.error('Error occurred:', error);
            throw new Error(((_a = error.data) === null || _a === void 0 ? void 0 : _a.message) || 'An error occurred');
        });
    };
    Authservice.prototype.getuserdetails = function () {
        var storedCart = sessionStorage.getItem('auth');
        if (storedCart) {
            return JSON.parse(storedCart);
        }
        return []; // If no cart is stored, return an empty array
    };
    return Authservice;
}());
