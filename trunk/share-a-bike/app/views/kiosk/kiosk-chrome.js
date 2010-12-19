opus.Gizmo({
	name: "kiosk",
	dropTarget: true,
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2
	},
	chrome: [
		{
			name: "nameHeader",
			title: "",
			subtitle: "",
			type: "Palm.Mojo.PageHeader",
			l: 0,
			t: 0,
			styles: {
				textAlign: "left"
			}
		},
		{
			name: "infoScroller",
			scrollPosition: {
				left: 0,
				top: 0
			},
			type: "Palm.Mojo.Scroller",
			l: 0,
			t: 0,
			h: "100%",
			styles: {
				margin: "5",
				cursor: "move",
				overflow: "hidden",
				opacity: 1
			},
			controls: [
				{
					name: "addressDivider",
					label: "Address",
					type: "Palm.Mojo.Divider",
					l: 0,
					t: 0,
					styles: {
						opacity: 1
					}
				},
				{
					name: "streetLabel",
					label: "",
					type: "Palm.Mojo.Label",
					l: 0,
					t: 34,
					h: "30"
				},
				{
					name: "cityLabel",
					label: "",
					type: "Palm.Mojo.Label",
					l: 0,
					t: 34,
					h: "30"
				},
				{
					name: "availDivider",
					label: "Availability",
					type: "Palm.Mojo.Divider",
					l: 0,
					t: 94
				},
				{
					name: "bikesLabel",
					label: "",
					type: "Palm.Mojo.Label",
					l: 0,
					t: 128,
					h: "30"
				},
				{
					name: "docksLabel",
					label: "",
					type: "Palm.Mojo.Label",
					l: 0,
					t: 158,
					h: "30"
				}
			]
		}
	]
});