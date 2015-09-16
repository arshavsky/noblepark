// Declare overlays variable
var overlays = document.getElementById("svg-overlays");

// Define Overlay Arrays
var overlaysOne = ["retailOne", "120,100 300,100 300,200 120,200", "retail", "retailTwo", "700,88 850,88 850,200 700,200", "retail"];

var overlaysTwo = ["retailOne", "120,100 300,100 300,400 120,400", "retail", "retailTwo", "700,88 850,88 850,353 700,353", "retail"];

var overlaysThree = [
"threeD", "580,340 715,340 715,695 500,695 500,410 580,410", "oneBedroom",
"threeE", "284,340 430,340 430,410 500,410 500,695 284,695", "oneBedroom", 
"threeF", "125,310 266,310 266,354 284,354 284,695 250,695 125,565", "oneBedroom",
"threeG", "125,95 310,95 310,310 125,310", "oneBedroom",
"threeH", "310,95 498,95 498,218 463,218 463,290 438,290 438,310 310,310", "oneBedroom",
"threeA", "498,95 690,95 690,310 566,310 566,286 543,286 543,220 498,220", "oneBedroom", 
"threeB", "690,95 874,95 874,310 690,310", "oneBedroom",
"threeC", "735,310 874,310 874,695 715,695 715,354 735,354", "oneBedroom"];

var overlaysFour = ["fourD", "100,88 300,88 300,500 100,500", "threeBedroom",
"fourE", "330,88 450,88 450,330 330,330", "oneBedroom", "fourF", "530,88 630,88 630,300 530,300", "oneBedroom",
"fourA", "730,88 850,88 850,600 730,600", "threeBedroom", "fourB", "580,350 700,350 700,500 580,500", "oneBedroom",
"fourC", "330,350 450,350 450,550 330,550"];

var overlaysFive = ["fiveD", "100,88 300,88 300,500 100,500", "threeBedroom",
"fiveE", "330,88 450,88 450,330 330,330", "oneBedroom", "fiveF", "530,88 630,88 630,300 530,300", "oneBedroom",
"fiveA", "730,88 850,88 850,600 730,600", "threeBedroom", "fiveB", "580,350 700,350 700,500 580,500", "oneBedroom",
"fiveC", "330,350 450,350 450,550 330,550", "oneBedroom"];

var overlaysSix = ["sixD", "100,88 300,88 300,500 100,500", "oneBedroom",
"sixE", "330,88 450,88 450,330 330,330", "twoBedroom", "sixSevenF", "530,88 630,88 630,300 530,300", "threeBedroom",
"sixSevenA", "730,88 850,88 850,600 730,600", "threeBedroom", "sixB", "580,350 700,350 700,500 580,500", "twoBedroom",
"sixC", "330,350 450,350 450,550 330,550", "oneBedroom"];

var overlaysSeven = ["sevenC", "120,88 300,88 300,500 120,500", "threeBedroom",
"sevenA", "400,88 630,88 630,250 400,250", "twoBedroom",
"sevenB", "720,88 850,88 850,550 720,550", "threeBedroom", "sixSevenA", "580,350 700,350 700,500 580,500", "threeBedroom",
"sixSevenF", "330,350 450,350 450,550 330,550", "threeBedroom"];

// Defines Modal Window Contents, Used by changeFloorImage Function
function defineModalWindowContents(overlayID) {
	document.getElementById("modalParagraph").innerHTML = overlayID;
	document.getElementById("modalImage").src = "img/section-floorplans/" + overlayID + ".png";
};

// Start Function
function changeFloorImage(floor, array) {

	// Remove Existing Overlays Onclick
	overlays.innerHTML = "";

	// Replace Floor Plan Image Onclick
	overlays.style.background = "url('img/section-floorplans/level" + floor + ".png')";
	overlays.style.backgroundSize = "contain";
	overlays.style.backgroundRepeat = "no-repeat";

	// Start For Loop
	for (i = 0; i < (array.length - 1); i += 3) {

		// Declare an Anchor
		var anchor = document.createElementNS("http://www.w3.org/2000/svg", "a");
		// Declare a Polygon
		var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

		// Anchor's Attributes
		anchor.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#openModal");
		// Define contents of Modal Window on Mouseover

		// Declare a New Class Variable for the Polygons
		var compositeClass = "apartment-overlay " + array[i+2];
		
		// Polygon's Attributes
		polygon.setAttribute("onmouseover", 'defineModalWindowContents("' + array[i] + '")');
		polygon.setAttribute("class", compositeClass);
		polygon.setAttribute("points", array[i+1]);
		polygon.setAttribute("id", array[i]);

		// Append the Motherfuckers
		anchor.appendChild(polygon);
		overlays.appendChild(anchor);

	}; // End For Loop

}; // End Function



// Function Highlights X-Bedroom Apartments Onmouseover
function opacityAdjust (inputVar, opacityValue) {

	var allSuchClass = document.getElementsByClassName(inputVar); // Declare a Variable Which Becomes an Array
	for (i = 0; i < allSuchClass.length; i++) { // For Each Array Member Style Opacity Value
		allSuchClass[i].style.opacity = opacityValue;
	};
};

// This lovely funciton removes all inline style tags from the overlays to make sure that style are defined by a class
// described in an external css document.

function removeStyle (inputVar) {
	var allSuchClass = document.getElementsByClassName(inputVar); // Declare a Variable Which Becomes an Array
	for (i = 0; i < allSuchClass.length; i++) { // For Each Array Member Style Opacity Value
		allSuchClass[i].removeAttribute("style");
	};
};
// Run Function on Page Load for L1 arrays and Images
window.onload = changeFloorImage('Three', overlaysThree); 