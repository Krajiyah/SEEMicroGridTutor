angular.module('app.controllers.main', []).controller("MainCtrl", function($scope, $location, Tools, Locations, Results) {
    $scope.getRoute = function() {
        var path = $location.path();
        if (path == null || path.trim() == "") return "/about";
        return path;
    }
    $scope.locations = Locations.getLocations();
    $scope.tools = Tools.getTools();
    $scope.droppedTools = [];
    $scope.power = 0;
    $scope.cost = 0;
    $scope.risk = "";
    $scope.results = [];

    $scope.go = function(path, locID) {
        $location.path(path);
        $scope.locID = locID;
    };

    $scope.goIfLocationNull = function(path) {
        if ($scope.locID == null) $location.path(path);
    }

    $scope.getLocationByID = Locations.getLocationByID;

    $scope.$watch("droppedTools", function(droppedTools) {
        if (droppedTools == null || droppedTools.length == 0) $scope.droppedTools = [Tools.dummyTool()];
        else if (!Tools.toolListEquals(droppedTools,  [Tools.dummyTool()])) $scope.droppedTools = Tools.filterDummyTool(droppedTools);
        $scope.results = Results.getResults($scope.droppedTools, $scope.locID);
        $scope.risk = Results.getRisk($scope.droppedTools, $scope.locID);
        $scope.power = Results.getPower($scope.droppedTools, $scope.locID);
        $scope.cost = Results.getCost($scope.droppedTools, $scope.locID);
    }, true);

    $scope.$watch("tools", function(tools) {
        var startingTools = Tools.getTools();
        if (!Tools.toolListEquals(tools,  startingTools)) $scope.tools = startingTools;
    }, true);
});