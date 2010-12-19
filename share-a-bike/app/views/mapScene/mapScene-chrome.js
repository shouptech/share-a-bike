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
			name: "mapHeader",
			title: "Kiosks Map",
			subtitle: "",
			type: "Palm.Mojo.PageHeader",
			l: 0,
			t: 49
		},
		{
			name: "kioskMap",
			latitude: 39.739167,
			longitude: -104.984722,
			type: "Palm.Mojo.Map",
			l: 0,
			t: 49,
			h: "100%"
		}
	]
});