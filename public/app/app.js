angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'dndLists',
    'app.services',
    'app.controllers'
]).config(function($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "views/about.html"
        })
        .when("/location", {
            templateUrl: "views/locations.html"
        })
        .when("/game", {
            templateUrl: "views/game.html"
        })
        .otherwise({
            templateUrl: "views/about.html"
        });
});