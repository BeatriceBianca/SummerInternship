(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('adminloginController', Controller);

    Controller.$inject = ['$scope', 'AdminLoginService'];

    function Controller($scope, AdminLoginService) {

        $scope.title = "Login Here";
        $scope.login = function(){
            var user = {
                username: $scope.username,
                password: $scope.password
            };
            AdminLoginService
                .login(user)
                .then(function(response){
                    document.location.href = "/firstpage";
                    console.log(response.data);
                }, function () {
                    $scope.fail = "Username or password is incorrect!";
                    $scope.username = "";
                    $scope.password = "";
                });
        };

    }

})();