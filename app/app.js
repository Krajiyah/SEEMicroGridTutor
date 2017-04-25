angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'app.services',
    'app.controllers'
]).config(function($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "views/about.html"
        })
        .when("/game", {
            templateUrl: "views/locations.html"
        })
        .when("/actualgame", {
            templateUrl: "views/game.html"
        })
        .otherwise({
            templateUrl: "views/about.html"
        });
});