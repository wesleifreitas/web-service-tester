(function() {
    'use strict';

    angular.module('webServiceTester').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'homeService'];

    function HomeCtrl($scope, homeService) {

        var vm = this;
        vm.response = '';
        vm.wsdl = '';
        vm.operation = '';
        vm.data = '';

        vm.loading = false;
        vm.post = post;

        function post() {
            vm.loading = true;
            vm.response = '';

            var params = {
                wsdl: vm.wsdl.replace('?wsdl', ''),
                operation: vm.operation,
                data: vm.data
            }
            homeService.webServicePost(params)
                .then(function success(response) {
                        //console.info('success', response);
                        if (typeof response === 'object') {
                            vm.response = angular.toJson(response);
                        } else {
                            vm.response = response;
                        }
                        vm.loading = false;
                    },
                    function error(response) {
                        //console.error('error', response);
                        vm.response = response;
                        vm.loading = false;
                    })
        }
    }
})();