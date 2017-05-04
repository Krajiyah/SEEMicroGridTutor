angular.module('app.services.results', []).factory("Results", function(Tools, Locations) {
	function getResults(tools, locationID) {
		if (Tools.toolListEquals(tools, [Tools.dummyTool()])) return [ "Please drop a tool into the drop zones to see what results you get."];
		var location = Locations.getLocationByID(locationID);
		var msg = [];
		var count;
		var id_1 = false;
		var id_2 = false;
		var id_3 = false;
		for (count = 0; count < tools.length; count++) {
			if (tools[count].id == 1 && id_1 == false) {
				msg.push("Solar panels are renewable, abundant, sustainable, environmentally friendly, \
				       have lots of financial support from the government, low maintainence, reduces \
				       electricity costs, and are silent. However, they are expensive to install, only \
				       intermittent, energy storage is expensive, and requires alot of space to install.");
				id_1 = true;
			} else if (tools[count].id == 2 && id_2 == false) {
				msg.push("Hydroelectric energy is renewable, clean (no greenhouse gases produced), is \
				       relatively cheap, contributes to the development of remote communities, and can be used \
				       for recreational opportunities like fishing, boating, or swimming. However, they can \
				       cause irreparable environmental damage, they have high upfront capital costs, \
				       might cause water conflict (which in turn may lead to drought), emit methane.");
				id_2 = true;
			} else if (tools[count].id == 3 && id_3 == false) { 
				msg.push("Wind energy is clean, does not use water in its energy generation, an inexhaustible \
				        source of energy, is cost-effective, can be built on existing farms or ranches, and creates \
				        a lot of jobs. However, with this comes the fact that wind turbines must often be in remote \
				        rural locations away from cities that need electricity the most. They also are slightly noisy, \
				        and can be harmful to wildlife (blades hitting birds).");
				id_3 = true;
			}
		}
		return msg;
	}

	function getRisk(tools, locationID) {
		if (Tools.toolListEquals(tools, [Tools.dummyTool()])) return "Low";
		var location = Locations.getLocationByID(locationID);
		if (tools.length > 30) {
			return "High";
		} else if (tools.length > 20) {
			return "Medium";
		} else if (tools.length > 10) {
			return "Low";
		} else {
			return "None";
		}
	}

	function getCost(tools, locationID) {
		if (Tools.toolListEquals(tools, [Tools.dummyTool()])) return 0;
		var location = Locations.getLocationByID(locationID);
		var count;
		var total = 0;
		for (count = 0; count < tools.length; count++) {
			if (tools[count].id == 1) {
				total += 35000;
			} else if (tools[count].id == 2) {
				total += 2523650;
			} else {
				total += 64000;
			}
		}
		return total;
	}

	function getPower(tools, locationID) {
		if (Tools.toolListEquals(tools, [Tools.dummyTool()])) return 0;
		var location = Locations.getLocationByID(locationID);
		var count;
		var total = 0;
		for (count = 0; count < tools.length; count++) {
			if (tools[count].id == 1) {
				total += 5;
			} else if (tools[count].id == 2) {
				total += 339;
			} else {
				total += 2000;
			}
		}
		return total;
	}

	return {
		getResults: getResults,
		getRisk: getRisk,
		getCost: getCost,
		getPower: getPower
	}
});