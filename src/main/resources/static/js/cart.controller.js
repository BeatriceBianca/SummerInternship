(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('cartController', Controller);

    Controller.$inject = ['$scope', 'CartService'];

    function Controller($scope, CartService) {

        $scope.title = "Your cart"
        function init(){
            var user = {
                userName: localStorage.getItem("username")
            };
            CartService.showCart(user)
                .then(function (response) {
                    $scope.cartContent = response.data;
                })
        }

        init();

        $scope.modal = function(cart){
            $scope.selectedCart = cart;
        }

        $scope.delete = function(){
            var cart = $scope.selectedCart;
            CartService
                .deleteCart(cart)
                .then(function (value) {
                    alert("delete");
                    document.location.href = "/cart";
                }, function (reason) {
                    alert("nu merge");
                });
        }

    }

})();