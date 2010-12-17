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
		var gpsSuccess = true;
		var gpsResult = 0;
		
		var onGpsSuccess = function(result) {
			gpsResult = result;
		};
		
		var onGpsFailure = function(result) {
			gpsSuccess = false;
			this.showSpinner(false);
		};
		
		// Function for when AJAX request is complete
		var onAjaxComplete = function(transport) {
		var kiosks = [5];
		kiosks[0] = {name: "Name 1", distance: "0.1 mi", address: "100 Fake St", bikes: "0", docks: "1"};
		kiosks[1] = {name: "Name 2", distance: "0.2 mi", address: "100 Fake St", bikes: "0", docks: "1"};
		kiosks[2] = {name: "Name 3", distance: "0.3 mi", address: "100 Fake St", bikes: "0", docks: "1"};
		kiosks[3] = {name: "Name 4", distance: "0.4 mi", address: "100 Fake St", bikes: "0", docks: "1"};
		kiosks[4] = {name: "Name 5", distance: "12.2 mi", address: "100 Fake St", bikes: "0", docks: "1"};
		// Display Kiosks
		this.listModel = {
				items: kiosks
			};
			this.controller.setWidgetModel("kioskList", this.listModel);
			// We're done, stop spinning 
			this.showSpinner(false);
		}.bind(this);
		
		var onAjaxFailure = function(transport) {
			// There has been a failure, stop spinning
			this.showSpinner(false);
		};
		
		// Get GPS Coord
		this.getGpsCoord(onGpsSuccess, onGpsFailure);
		
		if(gpsSuccess) {
			// Place AJAX request
			this.ajaxRequest(url, onAjaxComplete, onAjaxFailure);
		};
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
	
	// Perform AJAX request to BCycle API
	ajaxRequest: function(url, onComplete, onFailure) {
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
	},
	
	// Function to start/stop spinning
	showSpinner: function(show) {
		this.controller.get('findButton').mojo[(show ? 'activate' : 'deactivate')]();
	},
};