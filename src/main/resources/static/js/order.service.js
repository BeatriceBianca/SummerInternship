(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('OrderService', ['$http', '$location', function($http, $location) {
            function find(){
                return $http.get("http://localhost:8090/showOrder",null);

            }

            return {
                find: find
            };

        }]);

})();