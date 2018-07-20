(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('RegisterService', ['$http', '$location', function($http, $location) {
                function addUser(user){
                    return $http.put("/addUser",user);
                }

                function find(user){
                    return $http.get("http://localhost:8090/find?username=" +user.username,null);
                }

            return {
                addUser: addUser,
                find: find
            };

        }]);

})();