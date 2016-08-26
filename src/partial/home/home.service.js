(function() {
    'use strict';

    angular.module('webServiceTester').factory('homeService', homeService);

    homeService.$inject = ['$soap', '$http'];

    function homeService($soap, $http) {
        var service = {};

        service.webServicePost = webServicePost;

        return service;

        function webServicePost(params) {
            //$soap.setCredentials('', '');            
            return $soap.post(params.wsdl, params.operation, JSON.parse(params.data));
        }
    }
}());