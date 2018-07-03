(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('homeController', Controller);

    Controller.$inject = ['$scope', 'HomeService'];

    function Controller($scope, HomeService) {

        $scope.title = "My App for Summer Internship"

    }

})();