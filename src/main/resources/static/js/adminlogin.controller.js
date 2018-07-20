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
                    localStorage.setItem("ausername",response.data.username);
                    localStorage.setItem("afirstname", response.data.firstName);
                    localStorage.setItem("alastname", response.data.lastName);
                    localStorage.setItem("acontractnr", response.data.contractNr);
                    document.location.href = "/adminfirstpage";
                    console.log(response.data);
                }, function () {
                    $scope.fail = "Username or password is incorrect!";
                    $scope.username = "";
                    $scope.password = "";
                });
        };

    }

})();