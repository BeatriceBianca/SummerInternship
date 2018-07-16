(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('LoginService', ['$http', '$location', function($http, $location) {

            var user1;
            function login(user){
                user1 = $http.get("http://localhost:8090/verifylogin?username=" +user.username+"&password=" + user.password,null);
                return user1;
            }


            var setValue = function (data) {
                var temp ='';
                temp = data;
            };
            var getValue = function () {
                return user1;
            };

            return {
                login: login,
                setValue: setValue,
                getValue: getValue
            };

        }]);

})();