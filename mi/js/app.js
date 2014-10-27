'use strict';

/* App Module */

var portfolioApp = angular.module('portfolioApp', [
    'ngRoute', 'portfolioControllers'
]);

portfolioApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/portfolio', {
                templateUrl: 'partials/portfolio-list.html',
                controller: 'PortfolioListCtrl'
            }).
            when('/portfolio/:portfolioId', {
                templateUrl: 'partials/portfolio-detail.html',
                controller: 'PortfolioDetailCtrl'
            }).
            otherwise({
                redirectTo: '/portfolio'
            });
    }]);