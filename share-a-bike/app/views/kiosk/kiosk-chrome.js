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
			name: "pageHeader2",
			title: "17th & Grant",
			subtitle: "",
			type: "Palm.Mojo.PageHeader",
			l: 0,
			t: 0
		},
		{
			name: "scroller1",
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
					name: "group1",
					dropTarget: true,
					label: "Location",
					type: "Palm.Mojo.Group",
					l: 0,
					t: 0,
					h: "100",
					controls: [
						{
							name: "row1",
							dropTarget: true,
							focusHighlight: false,
							tapHighlight: false,
							type: "Palm.Mojo.Row",
							l: 0,
							t: 0,
							h: "100%",
							controls: [
								{
									name: "label2",
									kind: "title",
									label: "1700 Grant St",
									type: "Palm.Mojo.Label",
									l: "4",
									t: 0,
									h: "28"
								},
								{
									name: "label3",
									kind: "title",
									label: "Denver, CO 80000",
									type: "Palm.Mojo.Label",
									l: "4",
									t: 28,
									h: "28"
								}
							]
						}
					]
				},
				{
					name: "group2",
					dropTarget: true,
					label: "Availability",
					type: "Palm.Mojo.Group",
					l: 0,
					t: 95,
					controls: [
						{
							name: "row2",
							dropTarget: true,
							focusHighlight: false,
							tapHighlight: false,
							type: "Palm.Mojo.Row",
							l: 0,
							t: 0
						}
					]
				}
			]
		}
	]
});