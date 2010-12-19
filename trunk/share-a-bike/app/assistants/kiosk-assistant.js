function KioskAssistant(argFromPusher) {
	this.kiosk = argFromPusher;
}

KioskAssistant.prototype = {
	setup: function() {
		// Setup Application Menu
		this.controller.setupWidget(Mojo.Menu.appMenu, AddSubMenuAttr, AddSubMenuModel); 
		
		// Setup Scene
		Ares.setupSceneAssistant(this);
		
		// Set labels to reflect the data
		this.$.nameHeader.setTitle(this.kiosk.name);
		this.$.streetLabel.setLabel(this.kiosk.address);
		this.$.cityLabel.setLabel(this.kiosk.city + ', ' + this.kiosk.state + ' ' + this.kiosk.zip);
		this.$.bikesLabel.setLabel('Bikes available: ' + this.kiosk.bikes);
		this.$.docksLabel.setLabel('Docks available: ' + this.kiosk.docks);
	},
	cleanup: function() {
		Ares.cleanupSceneAssistant(this);
	}
};