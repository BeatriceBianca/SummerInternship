(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('adminprofilepageController', Controller);

    Controller.$inject = ['$scope', 'AdminProfilePageService'];

    function Controller($scope, AdminProfilePageService) {

        $scope.title = localStorage.getItem("ausername");
        $scope.contractNr = localStorage.getItem("acontractnr");
        $scope.firstname = localStorage.getItem("afirstname");
        $scope.lastname = localStorage.getItem("alastname");

    }

})();