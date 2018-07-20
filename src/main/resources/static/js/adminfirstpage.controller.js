(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('adminfirstpageController', Controller);

    Controller.$inject = ['$scope', 'AdminFirstPageService'];

    function Controller($scope, AdminFirstPageService) {

        $scope.title = "List of available products";
        function init(){
            AdminFirstPageService.find()
                .then(function (response) {
                    $scope.movies = response.data;
                    $scope.movies.forEach(function (movie) {
                        movie.disp = true;

                    })
                })
        }

        init();

        $scope.modal = function(movie){
            $scope.selectedMovie = movie;
        }

        $scope.cart = function(){
            document.location.href = "/admincart";
        }

        $scope.enableEditMode = function () {
            $scope.editMode = true;
        }

        $scope.update = function() {
            AdminFirstPageService.update($scope.selectedMovie)
                .then(function (response) {
                    $scope.editMode = false;
                })

        }

        $scope.order = function () {
            document.location.href = "/order";
        }


    }

})();