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
			name: "header1",
			label: "Nearby Kiosks",
			type: "Palm.Mojo.Header",
			l: 0,
			t: 0
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