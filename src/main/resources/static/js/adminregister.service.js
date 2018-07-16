(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('AdminRegisterService', ['$http', '$location', function($http, $location) {
                function addAdmin(admin){
                    return $http.put("addAdmin",admin);
                }

            return {
                addAdmin: addAdmin
            };

        }]);

})();