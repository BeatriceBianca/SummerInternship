(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('profilepageController', Controller);

    Controller.$inject = ['$rootScope','$scope', 'ProfilePageService'];

    function Controller($rootScope,$scope, ProfilePageService) {

        $scope.title = localStorage.getItem("username");
        $scope.firstname = localStorage.getItem("firstname");
        $scope.lastname = localStorage.getItem("lastname");

        $scope.delete = function(){
            var user = {
                userId: localStorage.getItem("id")
            };
            ProfilePageService
                .deleteUser(user)
                .then(function (value) {
                    alert("delete");
                    document.location.href = "/register";
                }, function (reason) {
                        alert("nu merge");
                });
        }

    }

})();