(function() {

    'use strict';

    angular
        .module('summerInternship')
        .controller('orderController', Controller);

    Controller.$inject = ['$scope', 'OrderService'];

    function Controller($scope, OrderService) {

        $scope.title = "Orders";

        function init(){
            OrderService.find()
                .then(function (response) {
                    $scope.cartContent = response.data;
                })
        }

        init();

        $scope.modal = function(cart){
            $scope.selectedCart = cart;
        }


    }

})();