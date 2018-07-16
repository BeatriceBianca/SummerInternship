(function() {

         'use strict';

         angular
             .module('summerInternship')
             .controller('homepageController', Controller);

         Controller.$inject = ['$scope', 'HomePageService'];

         function Controller($scope, HomePageService) {

             $scope.title = "Choose your type"

         }

     })();