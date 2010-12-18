function MapSceneAssistant(argFromPusher) {
	this.items = argFromPusher.items;
	this.gps = argFromPusher.gps;
	this.markerIcon = "images/icon-32.png";
}

MapSceneAssistant.prototype = {
	setup: function() {
		// Setup Application Menu
		this.controller.setupWidget(Mojo.Menu.appMenu, AddSubMenuAttr, AddSubMenuModel); 

		Ares.setupSceneAssistant(this);
		
		this.$.kioskMap.setLongitude(this.gps.longitude);
		this.$.kioskMap.setLatitude(this.gps.latitude);
		
		var icon = new google.maps.MarkerImage(
				this.markerIcon,
				new google.maps.Size(32,32),
				new google.maps.Point(0,0),
				new google.maps.Point(16,16)
			);
		
		for(var i = 0; i < this.items.length; i++)
		{
			var latlng = new google.maps.LatLng(this.items[i].latitude, this.items[i].longitude);
			var marker = new google.maps.Marker({position: latlng, map: this.$.kioskMap.map, icon: this.markerIcon});
		}
		
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	}
};