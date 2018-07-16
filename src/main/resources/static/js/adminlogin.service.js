(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('AdminLoginService', ['$http', '$location', function($http, $location) {
            function login(user){
                return $http.get("http://localhost:8090/verifyadminlogin?username=" +user.username+"&password=" + user.password,null);
            }

            return {
                login: login
            };

        }]);

})();