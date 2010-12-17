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
			name: "findButton",
			ontap: "findButtonTap",
			disabled: undefined,
			label: "Find Kiosks",
			type: "Palm.Mojo.ActivityButton",
			l: 0,
			t: 0
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
					h: "100%"
				}
			]
		}
	]
});