opus.Gizmo({
	name: "main",
	dropTarget: true,
	ontap: "mainTap",
	type: "Palm.Mojo.Panel",
	h: "100%",
	styles: {
		zIndex: 2,
		opacity: 1,
		bgImage: ""
	},
	chrome: [
		{
			name: "mainHeader",
			label: "Nearby Kiosks",
			type: "Palm.Mojo.Header",
			l: 0,
			t: 452,
			styles: {
				opacity: 1,
				oneLine: false
			}
		},
		{
			name: "scroller1",
			mode: "free",
			scrollPosition: {
				left: 0,
				top: 0
			},
			type: "Palm.Mojo.Scroller",
			l: 0,
			t: 0,
			h: "100%",
			styles: {
				cursor: "move",
				overflow: "hidden"
			},
			controls: [
				{
					name: "kioskList",
					dropTarget: true,
					items: [],
					useSampleData: false,
					title: undefined,
					itemHtml: "<div class=\"palm-row\">\n  <div class=\"kiosk_left_col\">\n    <div class=\"kiosk_name\">#{name}</div>\n    <div class=\"kiosk_address\">#{address}</div>\n  </div>\n  <div class=\"kiosk_right_col\">\n    <div class=\"kiosk_distance\">#{distance}</div>\n    <div class=\"kiosk_availability\">#{bikes}B #{docks}D</div>\n  </div>\n</div>",
					swipeToDelete: false,
					rowTapHighlight: false,
					rowFocusHighlight: false,
					type: "Palm.Mojo.List",
					l: 0,
					t: 0,
					h: 100
				}
			]
		},
		{
			name: "panel1",
			layoutKind: "hbox",
			dropTarget: true,
			type: "Palm.Mojo.Panel",
			l: 0,
			t: 391,
			h: 60,
			controls: [
				{
					name: "mapButton",
					ontap: "mapButtonTap",
					disabled: true,
					label: "Map",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 0
				},
				{
					name: "findButton",
					ontap: "findButtonTap",
					disabled: undefined,
					label: "Find",
					type: "Palm.Mojo.ActivityButton",
					l: 320,
					t: 0
				}
			]
		}
	]
});