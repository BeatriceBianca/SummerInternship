(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('ProfilePageService', ['$http', '$location', function($http, $location) {

            function deleteUser(user) {
                return $http.post("http://localhost:8090/delete", user);

            }

            return {
                deleteUser: deleteUser
            };

        }]);

})();