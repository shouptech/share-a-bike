opus.Gizmo({
	name: "mapScene",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "pageHeader1",
			title: "Kiosks Map",
			subtitle: "",
			type: "Palm.Mojo.PageHeader",
			l: 0,
			t: 49
		},
		{
			name: "kioskMap",
			latitude: 0,
			longitude: 0,
			type: "Palm.Mojo.Map",
			l: 0,
			t: 49,
			h: "100%"
		}
	]
});