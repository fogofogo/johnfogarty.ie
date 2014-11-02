var portfolioControllers = angular.module('portfolioControllers', []);

/* Configure the routes */
portfolioControllers.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when("/", {templateUrl: "partials/p.html", controller: "PageCtrl"})
    .when("/a", {templateUrl: "partials/a.html", controller: "PageCtrl"})
    .when("/p", {templateUrl: "partials/p.html", controller: "PageCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

portfolioControllers.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");
});

portfolioControllers.controller('PortfolioListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('js/portfolio/portfolio.json').success(function(data) {
            $scope.portfolioItems = data;
        });
    }]);

portfolioControllers.controller('PortfolioDetailCtrl', ['$scope', '$routeParams', '$http', '$filter',
    function($scope, $routeParams, $http, $filter) {

        $http.get('js/portfolio/portfolio.json').success(function(data) {
           var result = $filter('filter')(data, {portfolioId:$routeParams.portfolioId})[0];
            $scope.portfolioItem = result;
            $scope.mainImageUrl = result.ImageUrls[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);