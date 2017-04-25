angular.module('app.services.locations', []).factory("Locations", function() {
	function getLocations() {
		return [
			{
				name: "Oakland City Center"
			},
			{
				name: "Jack London Square"
			},
			{
				name: "Oracle Coliseum and International Airport"
			},
			{
				name: "Mills College"
			},
			{
				name: "Temescal"
			},
			{
				name: "Lakeshore"
			},
			{
				name: "Bella Vista"
			}
		];
	}

	return {
		getLocations: getLocations
	}
});