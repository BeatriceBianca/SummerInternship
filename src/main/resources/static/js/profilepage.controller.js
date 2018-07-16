(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('profilepageController', Controller);

    Controller.$inject = ['$rootScope','$scope', 'ProfilePageService', 'LoginService'];

    function Controller($rootScope,$scope, ProfilePageService,LoginService) {

        $scope.title = LoginService.login();

    }

})();