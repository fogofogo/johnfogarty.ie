var portfolioControllers = angular.module('portfolioControllers', []);

/* Configure the routes */
portfolioControllers.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("/", {templateUrl: "partials/h.html", controller: "PageCtrl"})
    .when("/a", {templateUrl: "partials/a.html", controller: "PageCtrl"})
    .when("/p", {templateUrl: "partials/p.html", controller: "PageCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
portfolioControllers.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
});


portfolioControllers.controller('PortfolioListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/portfolio/portfolio.json').success(function(data) {
            $scope.portfolioItems = data;
        });
    }]);

portfolioControllers.controller('PortfolioDetailCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.portfolioId = $routeParams.portfolioId;
    }]);
