function MainAssistant(argFromPusher) {
}

MainAssistant.prototype = {
	setup: function() {
		Ares.setupSceneAssistant(this);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	},
	
	// The find button has been tapped 
	findButtonTap: function(inSender) {
		// Start Spinning 
		this.showSpinner(true);
		
		// API URL for BCycle
		var url = 'http://api.bcycle.com/services/mobile.svc/ListKiosks';
		gpsLatitude = 0;
		gpsLongitude = 0;
		
		// Perform AJAX request to BCycle API
		var ajaxRequest = function(url, onComplete, onFailure) {
			var kioskRequest = new Ajax.Request(url, {
				method: "get",
				evalJSON: 'force',
				contentType: 'application/x-www-form-urlencoded',
				requestHeaders: {
					"USER_AGENT": navigator.userAgent
				},
				onComplete: onComplete,
				onFailure: onFailure
			});
		};
		
		var onGpsSuccess = function(result) {
			gpsLatitude = result.latitude;
			gpsLongitude = result.longitude;
			
			// Place AJAX request
			ajaxRequest(url, onAjaxComplete, onAjaxFailure);
		};
		
		var onGpsFailure = function(result) {
			// Failure in GPS
			Mojo.Controller.errorDialog("Error while retrieving GPS data.");
			this.showSpinner(false);
		};
		
		// Function for when AJAX request is complete
		onAjaxComplete = function(transport) {
			this.sortKiosks(gpsLatitude, gpsLongitude, transport);
			// We're done, stop spinning 
			this.showSpinner(false);
		}.bind(this);
		
		onAjaxFailure = function(transport) {
			// Ajax failure
			this.showSpinner(false);
			Mojo.Controller.errorDialog("Error while retrieving data from BCycle's API.");
			
		}.bind(this);
		
		// Get GPS Coord
		this.getGpsCoord(onGpsSuccess, onGpsFailure);
	},
	
	// Find GPS Coordinate
	getGpsCoord: function(onSuccess, onFailure) {
		this.controller.serviceRequest('palm://com.palm.location', {
			method:"getCurrentPosition",
			parameters:{},
			onSuccess: onSuccess, 
			onFailure: onFailure
		}); 
	},
	
	// Function to start/stop spinning
	showSpinner: function(show) {
		this.controller.get('findButton').mojo[(show ? 'activate' : 'deactivate')]();
	},
	
	// Function to find nearest kiosks and sort them
	sortKiosks: function(latitude, longitude, kioskResult) {
		// Function to calculate distance between to lat/lon points
		var calcDistance = function(lat1, lon1, lat2, lon2) {
			var R = 3958.761; // Earth's Radius in miles
			var dLat = (lat2-lat1) * Math.PI/180; // Convert to Radians
			var dLon = (lon2-lon1) * Math.PI/180; // Convert to Radians
			var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
				Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * 
				Math.sin(dLon/2) * Math.sin(dLon/2); 
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
			var d = R * c;
			return d;
		};
		
		var closestKiosks = [];
		var nClosest = 5;
		
		// Initialize an empty set of kiosks
		for(var i = 0; i < nClosest; i++) {
			closestKiosks[i] = null;
		}
		
		// Loop through the kiosks
		for(i = 0; i < kioskResult.responseJSON.d.list.length; i++) {
			var kiosk = kioskResult.responseJSON.d.list[i];
			for(var j = 0; j < closestKiosks.length; j++) {
				if(closestKiosks[j] === null) {
					closestKiosks[j] = kiosk;
					break;
				} else {
					var d1 = calcDistance(latitude, longitude, closestKiosks[j].Location.Latitude, closestKiosks[j].Location.Longitude);
					var d2 = calcDistance(latitude, longitude, kiosk.Location.Latitude, kiosk.Location.Longitude);
					
					if(d2 < d1) {
						// Swap
						var temp = kiosk;
						kiosk = closestKiosks[j];
						closestKiosks[j] = temp;
					}
				}
			}
		}
		
		var kiosks = [];
		for(i = 0; i < closestKiosks.length; i++) {
			d = calcDistance(latitude, longitude, closestKiosks[i].Location.Latitude, closestKiosks[i].Location.Longitude);
			kiosks[i] = {
				name: closestKiosks[i].Name,
				distance: d.toFixed(2) + ' mi',
				address: closestKiosks[i].Address.Street,
				bikes: closestKiosks[i].BikesAvailable,
				docks: closestKiosks[i].DocksAvailable
			};
		}
		
		this.listModel = {
			items: kiosks
		};
		this.controller.setWidgetModel("kioskList", this.listModel);
	}
};