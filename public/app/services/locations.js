angular.module('app.services.locations', []).factory("Locations", function() {
	function getLocations() {
		return [
			{
				id: 0,
				name: "Oakland City Center"
			},
			{
				id: 1,
				name: "Jack London Square"
			},
			{
				id: 2,
				name: "Oracle Coliseum and International Airport"
			},
			{
				id: 3,
				name: "Mills College"
			},
			{
				id: 4,
				name: "Temescal"
			},
			{
				id: 5,
				name: "Lakeshore"
			},
			{
				id: 6,
				name: "Bella Vista"
			}
		];
	}

	function getLocationByID(ID) {
		var location = null;
		getLocations().forEach(function(loc) {
			if (loc.id == ID) {
				location = loc;
				return true;
			}
		});
		return location;
	}

	return {
		getLocations: getLocations,
		getLocationByID: getLocationByID
	}
});