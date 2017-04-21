angular.module('app.controllers.main', ['ui.drop']).controller("MainCtrl", function($scope, $location, Tools) {
	$scope.getRoute = function() {
		var path = $location.path();
		if (path == null || path.trim() == "") return "/about";
		return path;
	}
	$scope.tools = Tools.getTools();
});