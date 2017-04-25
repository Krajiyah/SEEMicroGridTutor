angular.module('app.controllers.main', ['ui.drop']).controller("MainCtrl", function($scope, $location, Tools, Locations) {
    $scope.getRoute = function() {
        var path = $location.path();
        if (path == null || path.trim() == "") return "/about";
        return path;
    }
    $scope.locations = Locations.getLocations();
    $scope.tools = Tools.getTools();

    $scope.power = 300;
    $scope.cost = 1000;
    $scope.risk = "HIGH";

    $scope.results = ["Please drop a tool into the drop zones to see what results you get."];

    $scope.go = function (path, loc) {
        $location.path(path);
        $scope.loc = loc;
    };
});