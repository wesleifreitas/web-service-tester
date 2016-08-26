(function() {
    'use strict';

    angular
        .module('webServiceTester', ['ngRoute',
            'ngMaterial',
            'ngMessages',
            'ui.mask',
            'pxConfig',            
            'px-form-item',
            'angularSoap'
        ])
        .config(config);


    config.$inject = ['$routeProvider', '$locationProvider', '$mdThemingProvider', '$mdDateLocaleProvider'];

    function config($routeProvider, $locationProvider, $mdThemingProvider, $mdDateLocaleProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'partial/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        });
        $routeProvider.when('/', {
            templateUrl: 'partial/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });


        $mdThemingProvider.theme('default')
            .primaryPalette('grey');
    }
})();