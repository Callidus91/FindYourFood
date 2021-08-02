app.controller('AccountController', ['$http', function ($http) {
    var accountCtrl = this; accountCtrl.accounts = {};
    $http.get('/Account/Login').success(function (data) {
        accountCtrl.accounts = data;
    }).error(function (data, status) {
        accountCtrl.error = "Error status : " + status;
    });
}]);
    
