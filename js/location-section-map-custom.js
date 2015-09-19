// Global Variables
var nobleLatLang = new google.maps.LatLng(-36.86048, 174.76637); // fucking obvious what it is anyway
var nobleBillBoardLatLAng = new google.maps.LatLng(-36.860515, 174.763148); // still following I hope?
var placedMarkers = []; // to keep track of markers placed on the map
var numberOfMarkers; // to keep track of the number of markers placed on the map

// Style the map
var styles = [ 
	{   featureType: "road", 
	    elementType: "labels.icon", 
		stylers: [ 
			{ saturation: 1 }, 
			{ gamma: 1 }, 
			{ visibility: "on" }, 
			{ hue: "#52CC29" } 
		] 
	},

	{ elementType: "geometry", 
	  	stylers: [ 
			{ saturation: 0 }
		]
	} 
];

// Education Markers
var educationMarkers = [
	['Grafton Campus, Auckland University', -36.861717, 174.769424],
	["Auckland Boys' Grammar", -36.872432, 174.768126],
	["Epsom Girls' Grammar", -36.876177, 174.773639],
	["St. Peter's College", -36.868412, 174.768575],
	["ACG Parnell College", -36.863163, 174.778555],
	["Newmarket Campus, Auckland University", -36.865905, 174.7733]
];

// Define Various Markers
var educationIcon = 'img/section-location/educationMarker.png'; 
var healthcareIcon = 'img/section-location/healthcareMarker.png'; 
var transportIcon = 'img/section-location/transportMarker.png'; 
var lifestyleIcon = 'img/section-location/lifestyleMarker.png'; 
var eatingOutIcon = 'img/section-location/eatingOutMarker.png'; 
var shoppingIcon = 'img/section-location/shoppingMarker.png'; 

// Healthcare Markers
var healthCareMarkers = [
	["Mercy Ascot Hospital", -36.873337, 174.769966],
	["Birthcare", -36.862298, 174.779796],
	["Starship Hospital", -36.8704597, 174.7691264]
];

// Transport Markers
var transportMarkers = [
	['Grafton Train Station', -36.865612, 174.76984],
	["Newmarket Train Station", -36.869111, 174.77903],
	["Southern Motorway Access", -36.858575, 174.763593],
	["Northern and Western Motorways Access", -36.855622, 174.769682]
];	

// Lifestyle Markers
var lifestyleMarkers = [
	['Olympic Pools', -36.866722, 174.77846],
	["Cityfitness Newmarket", -36.872318, 174.778104],
	["Rialto Cinemas", -36.868607, 174.777819],
	["Event Cinemas", -36.865959, 174.778397]
];

// Eating Out Markers
var eatingOutMarkers = [
	['Lumsden Green', -36.867154, 174.778022],
	["Urban Cafe", -36.865441, 174.777069],
	["Tribeca Restaurant & Bar", -36.86372, 174.779532]
];

// Shopping Markers
var shoppingMarkers = [
	['277 Westfield Complex', -36.870891, 174.776351],
	["Karen Walker", -36.871753, 174.777823],
	["Trelise Cooper", -36.86359, 174.780481],
	["Flowers After Hours", -36.862518, 174.781351]
];

// Define map
var map = new google.maps.Map(document.getElementById('location-section-map'), {
    center: nobleLatLang,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor:"#eeeeee",
    scrollwheel: false,
    mapTypeControl:false,
    disableDefaultUI: true,
    /*zoomControlOptions: {
		style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.RIGHT_CENTER
	},
	panControlOptions: {
		position: google.maps.ControlPosition.RIGHT_BOTTOM 
	}*/	
  });

// Chuck a permanent marker on the aforementioned map to show Noble's position
var nobleIcon = new google.maps.MarkerImage('img/section-location/dotPlusBillBoard.png',null,null, null,new google.maps.Size(150, 23));

var nobleMarker = new google.maps.Marker({
	map: map,
	position: nobleLatLang,
	icon: nobleIcon,
	title: "Noble Park Residences"
});

// Remove existing markers from the Map
function removeMarkers() {

	var j,position;

	for (j = 0; j < numberOfMarkers; j += 1){
		placedMarkers[j].setMap(null);
	};

	numberOfMarkers = 0;
	placedMarkers = [];
};

// Place New Markers on the Map
function placeMarkers(markersArray, iconType) {
	removeMarkers(); // remove all shit from the map brother

	var marker, i, postiion, bounds = new google.maps.LatLngBounds();

	for (i = 0; i < markersArray.length; i += 1) {
		marker = new google.maps.Marker({
			map: map,
			position: {lat: markersArray[i][1], lng: markersArray[i][2]},
			icon: iconType,
			title: markersArray[i][0]
		});

		// Keep reference of placed markers
		placedMarkers.push(marker);

		// Put the damn marker on the bloody map
		position = new google.maps.LatLng(markersArray[i][1], markersArray[i][2]);

		bounds.extend(position);
		
		// Every bit counts
		numberOfMarkers += 1;
	};

bounds.extend(nobleLatLang); // to make sure Noble Park Mark is always shown
google.maps.event.trigger(map, 'resize');
map.fitBounds(bounds);

};

map.setOptions({styles: styles}); // Apply styles on load
placeMarkers(educationMarkers, educationIcon); // Show educationMarkers on load

