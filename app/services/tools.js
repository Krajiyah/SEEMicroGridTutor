angular.module('app.services.tools', []).factory("Tools", function() {
	function getTools() {
		return [
			{
				name: "solar panel",
				image: '/assets/images/solarpanel.png'
			},
			{
				name: "hydro plant",
				image: '/assets/images/hydro.png'
			},
			{
				name: "wind turbine",
				image: '/assets/images/windturbine.png'
			}
		];
	}

	return {
		getTools: getTools
	}
});