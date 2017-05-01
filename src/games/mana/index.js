exports.games = (function() {
	var modelScripts = [
		"mana-model.js"
	]
	var config_view_js = [
		"mana-xd-view.js"
	]
	return [
		{
			"name": "mana",
			"modelScripts": modelScripts,
			"config": {
				"status": true,
				"model": {
					"title-en": "Mana",
					"summary": "Capture the opponent's Damyo",
					"rules": {
						"en": "rules.html",
						"fr": "rules-fr.html"
					},
					"maxLevel": 9,
					"plazza": "true",
					"module": "mana",
					"js": modelScripts,
					"credits": {
						"en": "credits.html",
						"fr": "credits-fr.html"
					},
					"description": {
						"en": "description.html",
						"fr": "description-fr.html"
					},
					"thumbnail": "thumbnail.png",
					"defaultLevel": 2,
					"gameOptions": {
						"roninCount": 5,
						"preventRepeat": true,
						"height": 6,
						"initial": [
							"223122",
							"131313",
							"312231",
							"231312",
							"213132",
							"132213"
						],
						"damyoCount": 1,
						"width": 6,
						"insertAnywhere": true,
						"damyoKillWin": 1,
						"stage1start": 3,
						"stage2start": 6,
						"factors": {
							"roninCount": [
								0,
								5,
								5,
								0,
								5,
								10
							],
							"sameAsDamyo": 10,
							"typeCount": [
								0,
								10,
								20,
								5
							],
							"dist2Damyo": -1,
							"dist2DamyoInvSquare": 50
						}
					},
					"levels": [
						{
							"label": "Padawan",
							"potential": 1000,
							"isDefault": true,
							"maxDepth": 2
						},
						{
							"label": "Warrior",
							"potential": 4000,
							"maxDepth": 5
						},
						{
							"label": "Samurai",
							"potential": 20000,
							"maxDepth": 6
						},
						{
							"label": "Ronin",
							"potential": 40000,
							"maxDepth": 8
						},
						{
							"label": "Damyo",
							"potential": 100000,
							"maxDepth": 8
						}
					]
				},
				"view": {
					"title-en": "Mana View",
					"animateSelfMoves": false,
					"css": [
						"mana.css"
					],
					"js": config_view_js,
					"visuals": {
						"600x600": [
							"res/visuals/mana-600x600-3d.jpg",
							"res/visuals/mana-600x600-2d.jpg"
						]
					},
					"preferredRatio": 1,
					"switchable": true,
					"module": "mana",
					"sounds": {
						"zip1": "zip1",
						"death1": "death1",
						"death3": "death3",
						"chains": "chains",
						"move1": "move1",
						"move3": "move3",
						"zip0": "zip0",
						"death2": "death2",
						"zip2": "zip2",
						"zip3": "zip3",
						"sabers": "sabersout",
						"deathdamyo": "manasound-kill2",
						"intro": "japenese-mana-intro",
						"wind": "wind"
					},
					"skins": [
						{
							"name": "orange3d",
							"title": "Orange (3D)",
							"3d": true,
							"camera": {
								"radius": 15,
								"limitCamMoves": true
							},
							"world": {
								"lightIntensity": 0.7,
								"skyLightIntensity": 0.2,
								"fog": true,
								"color": 14327863,
								"lightPosition": {
									"x": -10,
									"y": 18,
									"z": 10
								},
								"skyLightPosition": {
									"x": 10,
									"y": 18,
									"z": -10
								},
								"lightShadowDarkness": 0.25,
								"ambientLightColor": 8939008
							},
							"preload": [
								"smoothedfilegeo|0|/res/xd-view/meshes/strokeblack.js",
								"smoothedfilegeo|0|/res/xd-view/meshes/mana-piece-smoothed2.js",
								"smoothedfilegeo|0|/res/xd-view/meshes/select-ring-undo.js",
								"smoothedfilegeo|0|/res/xd-view/meshes/select-smoothed.js",
								"smoothedfilegeo|0|/res/xd-view/meshes/mana.js"
							]
						},
						{
							"name": "official",
							"title": "Official",
							"preload": [
								"image|/res/images/boardexp.png",
								"image|/res/images/manapieces.png"
							]
						}
					],
					"defaultOptions": {
						"sounds": true,
						"notation": false,
						"moves": true
					},
					"useNotation": true,
					"useShowMoves": true,
					"xdView": true
				}
			},
			"viewScripts": config_view_js
		}
	]
})()