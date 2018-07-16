(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('firstpageController', Controller);

    Controller.$inject = ['$scope', 'FirstPageService'];

    function Controller($scope, FirstPageService) {

        $scope.title = "List of available products";
    }

})();