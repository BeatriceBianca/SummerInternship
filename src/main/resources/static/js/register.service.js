(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('RegisterService', ['$http', '$location', function($http, $location) {
                function addUser(user){
                    return $http.put("/addUser",user);
                }

            return {
                addUser: addUser
            };

        }]);

})();