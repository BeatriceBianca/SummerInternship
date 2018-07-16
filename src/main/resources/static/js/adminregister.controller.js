(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('adminregisterController', Controller);

    Controller.$inject = ['$scope', 'AdminRegisterService'];

    function Controller($scope, AdminRegisterService) {

        $scope.title = "Registration Form";
        $scope.addAdmin = function(){
            var admin = {
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                username: $scope.username,
                contractNr: $scope.contractNr,
                password: $scope.password
            }
            AdminRegisterService.addAdmin(admin)
                .then(function (value) {
                    alert("Admin added");
                    document.location.href = "/adminlogin"
                });
        }

    }

})();