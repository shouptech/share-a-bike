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
			name: "kiosksScroller",
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
					itemHtml: "<div class='result palm-row' x-mojo-tap-highlight='momentary'>\n  <div class=\"palm-row-wrapper\">\n    <div class=\"kiosk_container\">\n      <div class=\"kiosk_name\">\n        #{name}\n      </div>\n      <div class=\"kiosk_address\">\n        #{address}\n      </div>\n      <div class=\"kiosk_stats\">\n        #{distance} | #{bikes} bikes | #{docks} docks\n      </div>\n    </div>\n  </div>\n</div>",
					onlisttap: "kioskListListtap",
					swipeToDelete: false,
					type: "Palm.Mojo.List",
					l: 0,
					t: 0,
					h: 100
				}
			]
		},
		{
			name: "buttonsVbox",
			dropTarget: true,
			type: "Palm.Mojo.Panel",
			l: 0,
			t: 391,
			h: "120",
			controls: [
				{
					name: "findHbox",
					layoutKind: "hbox",
					dropTarget: true,
					type: "Palm.Mojo.Panel",
					l: 0,
					t: 0,
					h: 60,
					controls: [
						{
							name: "findButton",
							ontap: "findButtonTap",
							disabled: undefined,
							label: "Find",
							type: "Palm.Mojo.ActivityButton",
							l: 0,
							t: 0,
							h: "100%"
						},
						{
							name: "radiusGroup",
							dropTarget: true,
							label: "",
							type: "Palm.Mojo.Group",
							l: 320,
							t: 0,
							h: "64",
							styles: {
								bgColor: ""
							},
							controls: [
								{
									name: "radiusRow",
									dropTarget: true,
									type: "Palm.Mojo.Row",
									l: 0,
									t: 0,
									h: "auto",
									controls: [
										{
											name: "radiusSelector",
											value: 0.5,
											choices: [
												{
													label: "1/4 Mile",
													value: "0.25"
												},
												{
													label: "1/2 Mile",
													value: "0.5"
												},
												{
													label: "3/4 Mile",
													value: "0.75"
												},
												{
													label: "1 Mile",
													value: "1"
												}
											],
											label: "",
											onchange: "radiusSelectorChange",
											type: "Palm.Mojo.ListSelector",
											h: "48",
											styles: {
												bgColor: ""
											}
										}
									]
								}
							]
						}
					]
				},
				{
					name: "mapButton",
					ontap: "mapButtonTap",
					disabled: true,
					label: "Map",
					type: "Palm.Mojo.Button",
					l: 0,
					t: 60
				}
			]
		}
	]
});