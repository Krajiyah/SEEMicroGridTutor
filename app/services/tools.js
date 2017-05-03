angular.module('app.services.tools', []).factory("Tools", function() {
	function getTools() {
		return [{
			name: "solar panel",
			image: '/assets/images/solarpanel.png'
		}, {
			name: "hydro plant",
			image: '/assets/images/hydro.png'
		}, {
			name: "wind turbine",
			image: '/assets/images/windturbine.png'
		}];
	}

	function _toolEquals(tool1, tool2) {
		return tool1.name == tool2.name && tool1.image == tool2.image;
	}

	function toolListEquals(tools1, tools2) {
		if (tools1 == null && tools2 == null) return true;
		if (tools1 == null && tools2.length == 0) return true;
		if (tools2 == null && tools1.length == 0) return true;
		if (tools1.length == 0 && tools2.length == 0) return true;
		for (var i = 0; i < tools1.length; i++) {
			var tool1 = tools1[i];
			var tool1Exists = false;
			for (var j = 0; j < tools2.length; j++) {
				var tool2 = tools2[j];
				if (_toolEquals(tool1, tool2)) {
					tool1Exists = true;
					break;
				}
			}
			if (!tool1Exists) return false;
		}
		for (var i = 0; i < tools2.length; i++) {
			var tool2 = tools2[i];
			var tool2Exists = false;
			for (var j = 0; j < tools1.length; j++) {
				var tool1 = tools1[j];
				if (_toolEquals(tool2, tool1)) {
					tool2Exists = true;
					break;
				}
			}
			if (!tool2Exists) return false;
		}
		return true;
	}

	return {
		getTools: getTools,
		toolListEquals: toolListEquals
	}
});