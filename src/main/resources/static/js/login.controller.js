(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('loginController', Controller);

    Controller.$inject = ['$rootScope','$scope', 'LoginService'];

    function Controller($rootScope,$scope, LoginService) {

        $scope.title = "Login Here";
        var user1;

        $scope.login = function(){
            var user = {
                username: $scope.username,
                password: $scope.password
            };
            LoginService
                .login(user)
                .then(function(response){
                    localStorage.setItem("username",response.data.username);
                    localStorage.setItem("firstname", response.data.firstName);
                    localStorage.setItem("lastname", response.data.lastName);
                    localStorage.setItem("id", response.data.userId);
                    document.location.href = "/profilepage";


                }, function () {
                    $scope.fail = "Username or password is incorrect!";
                    $scope.username = "";
                    $scope.password = "";
                });
        };

        function getUser(){
            return user1;
        }

    }

})();