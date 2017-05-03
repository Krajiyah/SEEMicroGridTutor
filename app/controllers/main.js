angular.module('app.controllers.main', []).controller("MainCtrl", function($scope, $location, Tools, Locations, Results) {
    $scope.getRoute = function() {
        var path = $location.path();
        if (path == null || path.trim() == "") return "/about";
        return path;
    }
    $scope.locations = Locations.getLocations();
    $scope.tools = Tools.getTools();
    const startingDroppedTools = [{name: "dummy", id: 123}];
    $scope.droppedTools = startingDroppedTools.slice(); // TODO: for some reason bug when droppedTools starts empty
    $scope.power = 300;
    $scope.cost = 1000;
    $scope.risk = "HIGH";
    const resultsHelpMessage = "Please drop a tool into the drop zones to see what results you get.";

    $scope.results = [resultsHelpMessage];

    $scope.go = function(path, locID) {
        $location.path(path);
        $scope.locID = locID;
    };

    $scope.goIfLocationNull = function(path) {
        if ($scope.locID == null) $location.path(path);
    }

    $scope.getLocationByID = Locations.getLocationByID;

    $scope.$watch("droppedTools", function(droppedTools) {
        console.log(JSON.stringify(droppedTools));
        if (droppedTools.length == 0 || Tools.toolListEquals(droppedTools,  startingDroppedTools)) {
            console.log("test1");
            $scope.results = [resultsHelpMessage];
        } else if (droppedTools != null && droppedTools.length > 0) {
            console.log("test2");
            $scope.results = Results.getResults(droppedTools, $scope.locID);
        }
    }, true);
});