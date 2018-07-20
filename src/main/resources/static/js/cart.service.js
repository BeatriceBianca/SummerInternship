(function() {

    'use strict';

    angular
        .module('summerInternship')
        .factory('CartService', ['$http', '$location', function($http, $location) {
            function showCart(user){
                 return $http.get("http://localhost:8090/showMovie?userName=" +user.userName,null);
            }

            function deleteCart(cart) {
                return $http.post("http://localhost:8090/deleteCart", cart);

            }

            return {
                showCart: showCart,
                deleteCart: deleteCart
            };

        }]);

})();