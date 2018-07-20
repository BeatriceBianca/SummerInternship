(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('firstpageController', Controller);

    Controller.$inject = ['$scope', 'FirstPageService'];

    function Controller($scope, FirstPageService) {

        $scope.title = "List of available products";
        function init(){
            FirstPageService.find()
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
            document.location.href = "/cart";
        }

        $scope.search = function(){
            $scope.movies.forEach(function (movie) {
                if(movie.movieName.toLowerCase().includes($scope.srch)||movie.director.toLowerCase().includes($scope.srch)){
                    movie.disp = true;
                }
                else movie.disp = false;

            })
        }

        $scope.addCart = function(selectedMovie){

            $scope.mv = selectedMovie;
            $scope.mv.userName = localStorage.getItem("username");
            FirstPageService
                .addCart($scope.mv)
                .then(function (value) {
                    alert("Added to cart");
                })
        }
    }

})();