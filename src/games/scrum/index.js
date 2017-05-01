exports.games = (function() {
	var modelScripts = [
		"scrum-model.js"
	]
	var config_view_js = [
		"scrum-xd-view.js"
	]
	var config_view_skins_camera = {
		"radius": 12,
		"limitCamMoves": true,
		"elevationMax": 80,
		"rotationAngle": 30,
		"elevationAngle": 35
	}
	var config_view_skins_world_lightPosition = {
		"x": -10,
		"y": 18,
		"z": 10
	}
	var config_view_skins_world = {
		"lightIntensity": 1,
		"fog": false,
		"color": 0,
		"lightPosition": config_view_skins_world_lightPosition,
		"lightShadowDarkness": 0.35,
		"ambientLightColor": 8947848,
		"skyLightIntensity": 0.3
	}
	var config_view_skins_preload = [
		"image|/res/xd-view/meshes/scrumfield8x12.jpg",
		"image|/res/xd-view/meshes/teama-text.jpg",
		"image|/res/xd-view/meshes/teamb-text.jpg",
		"image|/res/xd-view/meshes/ballUVslayout.jpg",
		"image|/res/xd-view/meshes/pubs.jocly.jpg",
		"smoothedfilegeo|0|/res/xd-view/meshes/target.js",
		"smoothedfilegeo|0|/res/xd-view/meshes/stade2-xtra.js",
		"smoothedfilegeo|0|/res/xd-view/meshes/player-anim.js",
		"smoothedfilegeo|0|/res/xd-view/meshes/scrum-ball.js",
		"smoothedfilegeo|0|/res/xd-view/meshes/arrow.js",
		"smoothedfilegeo|0|/res/xd-view/meshes/arrowscrum.js"
	]
	return [
		{
			"name": "scrum",
			"modelScripts": modelScripts,
			"config": {
				"status": true,
				"model": {
					"title-en": "Scrum",
					"summary": "A little rugby game",
					"rules": {
						"en": "rules.html",
						"fr": "rules-fr.html"
					},
					"module": "scrum",
					"maxLevel": 5,
					"defaultLevel": 1,
					"plazza": "true",
					"js": modelScripts,
					"description": {
						"en": "description.html",
						"fr": "description-fr.html"
					},
					"credits": {
						"en": "credits.html",
						"fr": "credits-fr.html"
					},
					"thumbnail": "scrum-thumb3d.png",
					"strings": {
						"no-surround": "You cannot completely surround the ball"
					},
					"gameOptions": {
						"preventRepeat": true,
						"width": 5,
						"height": 12,
						"initial": {
							"a": [
								[
									1,
									2
								],
								[
									2,
									0
								],
								[
									2,
									4
								],
								[
									3,
									2
								],
								[
									4,
									1
								],
								[
									5,
									2
								],
								[
									5,
									0
								]
							],
							"b": [
								[
									11,
									2
								],
								[
									10,
									0
								],
								[
									10,
									4
								],
								[
									9,
									2
								],
								[
									8,
									1
								],
								[
									7,
									2
								],
								[
									7,
									0
								]
							],
							"ball": [
								5,
								1
							]
						},
						"uctTransposition": "states",
						"levelOptions": {
							"MIN_MOVES": 20,
							"ROW_FACTOR": 20,
							"BDIST_FACTOR": 0.05,
							"NEIGHBOR_FACTOR": 0.18953811793163
						}
					},
					"levels": [
						{
							"label": "Fast",
							"isDefault": true,
							"maxDuration": 1,
							"playoutDepth": 1,
							"minVisitsExpand": 1,
							"c": 0.35272296388695,
							"ignoreLeaf": false,
							"ai": "uct",
							"productRatio": 0,
							"useDepthWeights": false,
							"propagation": "mixed",
							"useAlphaBeta": true,
							"uncertaintyFactor": 2.4883591498064,
							"propagateMultiVisits": false
						},
						{
							"label": "Beginner",
							"maxLoops": 200,
							"playoutDepth": 1,
							"minVisitsExpand": 1,
							"c": 0.35272296388695,
							"ignoreLeaf": false,
							"propagateMultiVisits": false,
							"ai": "uct",
							"useDepthWeights": false,
							"propagation": "mixed",
							"useAlphaBeta": true,
							"uncertaintyFactor": 2.4883591498064,
							"maxDuration": 0.5,
							"maxNodes": 100,
							"productRatio": 0
						},
						{
							"label": "Easy",
							"maxLoops": 500,
							"playoutDepth": 1,
							"minVisitsExpand": 1,
							"c": 0.35272296388695,
							"ignoreLeaf": false,
							"propagateMultiVisits": false,
							"ai": "uct",
							"useDepthWeights": false,
							"propagation": "mixed",
							"useAlphaBeta": true,
							"uncertaintyFactor": 2.4883591498064,
							"maxDuration": 1,
							"maxNodes": 2500,
							"productRatio": 0
						},
						{
							"label": "Medium",
							"maxLoops": 500,
							"playoutDepth": 1,
							"minVisitsExpand": 1,
							"c": 0.35272296388695,
							"ignoreLeaf": false,
							"propagateMultiVisits": false,
							"ai": "uct",
							"useDepthWeights": false,
							"propagation": "mixed",
							"useAlphaBeta": true,
							"uncertaintyFactor": 2.4883591498064,
							"maxDuration": 2,
							"maxNodes": 5500,
							"productRatio": 0
						},
						{
							"label": "Hard",
							"maxLoops": 3500,
							"playoutDepth": 1,
							"minVisitsExpand": 1,
							"c": 0.35272296388695,
							"ignoreLeaf": false,
							"propagateMultiVisits": false,
							"ai": "uct",
							"useDepthWeights": false,
							"propagation": "mixed",
							"useAlphaBeta": true,
							"uncertaintyFactor": 2.4883591498064,
							"maxDuration": 5,
							"maxNodes": 2000,
							"productRatio": 0
						},
						{
							"label": "Expert",
							"maxLoops": 3000,
							"playoutDepth": 1,
							"minVisitsExpand": 1,
							"c": 0.35272296388695,
							"ignoreLeaf": false,
							"propagateMultiVisits": false,
							"ai": "uct",
							"useDepthWeights": false,
							"propagation": "mixed",
							"useAlphaBeta": true,
							"uncertaintyFactor": 2.4883591498064,
							"maxDuration": 60,
							"maxNodes": 50000,
							"productRatio": 0
						}
					]
				},
				"view": {
					"title-en": "Scrum View",
					"css": [
						"scrum.css"
					],
					"switchable": true,
					"useNotation": true,
					"useShowMoves": true,
					"animateSelfMoves": false,
					"preferredRatio": 0.58,
					"sounds": {
						"whistle": "whistle",
						"win": "stadiumcrowd",
						"loss": "stadiumcrowd",
						"end": "stadiumcrowd"
					},
					"defaultOptions": {
						"sounds": true,
						"notation": false,
						"moves": true,
						"skin-scrum": "rugby",
						"viewAs": 1
					},
					"xdView": true,
					"js": config_view_js,
					"visuals": {
						"600x600": [
							"res/visuals/scrum-600x600-3d.jpg",
							"res/visuals/scrum-600x600-2d.jpg"
						]
					},
					"skins": [
						{
							"name": "scrum3djocly",
							"title": "Scrum 3D",
							"3d": true,
							"camera": config_view_skins_camera,
							"world": config_view_skins_world,
							"preload": config_view_skins_preload,
							"brand": "none"
						},
						{
							"name": "scrum3dsg",
							"title": "Scrum 3D SG",
							"3d": true,
							"camera": config_view_skins_camera,
							"world": config_view_skins_world,
							"preload": config_view_skins_preload,
							"brand": "sg"
						},
						{
							"name": "scrum3dhnk",
							"title": "Scrum 3D HNK",
							"3d": true,
							"camera": config_view_skins_camera,
							"world": config_view_skins_world,
							"preload": config_view_skins_preload,
							"brand": "hnk"
						},
						{
							"name": "scrum3dlr",
							"title": "Scrum 3D LR",
							"3d": true,
							"camera": config_view_skins_camera,
							"world": config_view_skins_world,
							"preload": config_view_skins_preload,
							"brand": "lr"
						},
						{
							"name": "scrum3dea",
							"title": "Scrum 3D EA",
							"3d": true,
							"camera": config_view_skins_camera,
							"world": config_view_skins_world,
							"preload": config_view_skins_preload,
							"brand": "ea"
						},
						{
							"name": "scrum3dcc",
							"title": "Scrum 3D CC",
							"3d": true,
							"camera": config_view_skins_camera,
							"world": config_view_skins_world,
							"preload": config_view_skins_preload,
							"brand": "cc"
						},
						{
							"name": "scrum3dtb",
							"title": "Scrum 3D TB",
							"3d": true,
							"camera": config_view_skins_camera,
							"world": config_view_skins_world,
							"preload": config_view_skins_preload,
							"brand": "tb"
						},
						{
							"name": "scrum3dmc",
							"title": "Scrum 3D MC",
							"3d": true,
							"camera": config_view_skins_camera,
							"world": config_view_skins_world,
							"preload": config_view_skins_preload,
							"brand": "mc"
						},
						{
							"name": "scrum3ddhl",
							"title": "Scrum 3D DHL",
							"3d": true,
							"camera": config_view_skins_camera,
							"world": config_view_skins_world,
							"preload": config_view_skins_preload,
							"brand": "dhl"
						},
						{
							"name": "regular",
							"title": "Classical 2D",
							"brand": "none",
							"preload": [
								"image|/res/xd-view/meshes/scrumfield8x12.jpg",
								"image|/res/images/regular.png"
							]
						},
						{
							"name": "regularsg",
							"title": "Classical 2D SG",
							"brand": "sg"
						},
						{
							"name": "regularhnk",
							"title": "Classical 2D HNK",
							"brand": "hnk"
						},
						{
							"name": "regularlr",
							"title": "Classical 2D LR",
							"brand": "lr"
						},
						{
							"name": "regularea",
							"title": "Classical 2D EA",
							"brand": "ea"
						},
						{
							"name": "regularcc",
							"title": "Classical 2D CC",
							"brand": "cc"
						},
						{
							"name": "regulartb",
							"title": "Classical 2D TB",
							"brand": "tb"
						},
						{
							"name": "regularmc",
							"title": "Classical 2D MC",
							"brand": "mc"
						},
						{
							"name": "regulardhl",
							"title": "Classical 2D DHL",
							"brand": "dhl"
						}
					]
				}
			},
			"viewScripts": config_view_js
		}
	]
})()