(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('registerController', Controller);

    Controller.$inject = ['$scope', 'RegisterService'];

    function Controller($scope, RegisterService) {

        $scope.title = "Registration Form";
        $scope.addUser = function(){
        var user = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            username: $scope.username,
            password: $scope.password
        }
        RegisterService.addUser(user)
            .then(function(value){
                alert("User addded");
                document.location.href = "/login"
            });
        }
    }

})();