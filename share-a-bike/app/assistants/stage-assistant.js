function StageAssistant() {
}

StageAssistant.prototype.setup = function() {
	// Setup Application Menu 
	AddSubMenuAttr = {omitDefaultItems: true};
	AddSubMenuModel = {
		visible: true,
		items: [
			Mojo.Menu.editItem,
			Mojo.Menu.prefsItem,
			{label: "Help", command: 'do-helpAddSub', shortcut: 'h'}
		]
	};
	this.controller.pushScene({name: "main", disableSceneScroller: true});
	this.controller.setWindowOrientation("free");
};


StageAssistant.prototype.handleCommand = function(event) {
	if(event.type == Mojo.Event.command) {
	switch(event.command) {
			case 'do-helpAddSub':
				this.controller.pushAppSupportInfoScene();
				break;
		}
	}
};