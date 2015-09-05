// Declare overlays variable
var overlays = document.getElementById("svg-overlays");

// Define Overlay Arrays
var overlaysOne = ["A", "495,88 735,88 735,353 585,353 585,333 553,333 553,242 495,242", "B", "740,88 972,88 972,353 740,353",
"C", "795,358 972,358 972,840 773,840 773,415 795,415", "D", "580,400 768,400 768,840 502,840 502,486 580,486",
"E", "231,400 415,400 415,486 498,486 498,840 231,840"];

var overlaysTwo = ["A", "495,88 735,88 735,353 585,353 585,333 553,333 553,242 495,242", "B", "740,88 972,88 972,353 740,353",
"C", "795,358 972,358 972,840 773,840 773,415 795,415", "D", "580,400 768,400 768,840 502,840 502,486 580,486",
"E", "231,400 415,400 415,486 498,486 498,840 231,840"];

var overlaysThree = ["D", "580,400 768,400 768,840 502,840 502,486 580,486",
"E", "231,400 415,400 415,486 498,486 498,840 231,840", "F", "25,355 202,355 202,418 225,418 225,840 185,840 25,675",
"G", "25,88 257,88 257,353 25,353", "H", "255,88 495,88 495,242 453,242 453,340 420,340 420,353 255,353"];

var overlaysFour = ["A", "495,88 735,88 735,353 585,353 585,333 553,333 553,242 495,242", "B", "740,88 972,88 972,353 740,353", "D", "580,400 768,400 768,840 502,840 502,486 580,486",
"E", "231,400 415,400 415,486 498,486 498,840 231,840"];

var overlaysFive = ["A", "495,88 735,88 735,353 585,353 585,333 553,333 553,242 495,242", "C", "795,358 972,358 972,840 773,840 773,415 795,415", "D", "580,400 768,400 768,840 502,840 502,486 580,486",
"E", "231,400 415,400 415,486 498,486 498,840 231,840"];

var overlaysSix = ["A", "495,88 735,88 735,353 585,353 585,333 553,333 553,242 495,242"];

var overlaysSeven = ["D", "580,400 768,400 768,840 502,840 502,486 580,486",
"E", "231,400 415,400 415,486 498,486 498,840 231,840"];

// Start Function
function changeFloorImage(floor, array) {

	// Remove Existing Overlays Onclick
	overlays.innerHTML = "";

	// Replace Floor Plan Image Onclick
	overlays.style.background = "url('img/section-floorplans/level" + floor + ".png')";
	overlays.style.backgroundSize = "contain";
	overlays.style.backgroundRepeat = "no-repeat";

	// Start For Loop
	for (i = 0; i < (array.length - 1); i += 2) {

		// Declare an Anchor
		var anchor = document.createElementNS("http://www.w3.org/2000/svg", "a");
		// Declare a Polygon
		var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

		// Anchor's Attributes
		anchor.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#openModal");

		// Polygon's Attributes
		polygon.setAttribute("class", "apartment-overlay");
		polygon.setAttribute("points", array[i+1]);
		polygon.setAttribute("id", array[i]);

		// Append the Motherfuckers
		anchor.appendChild(polygon);
		overlays.appendChild(anchor);

	}; // End For Loop

}; // End Function

// Run Function on Page Load for L1 arrays and Images
window.onload(changeFloorImage('One', overlaysOne)); 