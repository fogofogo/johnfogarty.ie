/* Main AngularJS Web Application */

var app = angular.module('webApp', [
    'ngRoute'
]);

/* Configure the routes */

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

    // H
    .when("/", {templateUrl: "partials/h.html", controller: "PageCtrl"})

    // A
    .when("/a", {templateUrl: "partials/a.html", controller: "PageCtrl"})

    // P
    .when("/p", {templateUrl: "partials/p.html", controller: "PageCtrl"})

    // 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});

}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    /*  Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    }) */
});
