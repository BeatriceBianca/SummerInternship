(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('AdminFirstPageService', ['$http', '$location', function($http, $location) {
            function find(){
                return $http.get("http://localhost:8090/getMovies",null);

            }

            function update(movie){
                return $http.post("http://localhost:8090/updateMovie",movie);
            }

            return {
                find: find,
                update: update
            };

        }]);

})();