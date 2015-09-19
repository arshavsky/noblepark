// Declare overlays variable
var overlays = document.getElementById("svg-overlays");

// Define Overlay Arrays
var overlaysOne = [
"retailOne", "120,92 315,92 315,197 120,197", "retail", 
"retailTwo", "690,92 878,92 878,197 690,197", "retail"];

var overlaysTwo = [
"retailOne", "120,92 315,92 315,345 240,345 240,420 205,420 205,391 120,391", "retail", 
"retailTwo", "688,92 878,92 878,417 785,417 785,345 688,345", "retail"];

var overlaysThree = [
"threeD", "580,340 715,340 715,695 500,695 500,410 580,410", "oneBedroom",
"threeE", "284,340 430,340 430,410 500,410 500,695 284,695", "oneBedroom", 
"threeF", "125,310 266,310 266,354 284,354 284,695 250,695 125,565", "oneBedroom",
"threeG", "125,95 310,95 310,310 125,310", "oneBedroom",
"threeH", "310,95 498,95 498,218 463,218 463,290 438,290 438,310 310,310", "oneBedroom",
"threeA", "498,95 690,95 690,310 566,310 566,286 543,286 543,220 498,220", "oneBedroom", 
"threeB", "690,95 874,95 874,310 690,310", "oneBedroom",
"threeC", "735,310 874,310 874,695 715,695 715,354 735,354", "oneBedroom"];

var overlaysFour = [
"fourD", "125,92 310,92 310,312 320,312 320,342 283,342 283,577 125,577", "threeBedroom",
"fourE", "310,92 498,92 498,220 463,220 463,290 434,290 434,310 310,310", "oneBedroom",
"fourF", "498,92 690,92 690,310 566,310 566,286 543,286 543,220 498,220", "oneBedroom",
"fourA", "690,92 875,92 875,577 715,577 715,340 677,340 677,310 690,310", "threeBedroom",
"fourB", "580,340 715,340 715,577 500,577 500,410 580,410", "oneBedroom",
"fourC", "284,340 430,340 430,410 500,410 500,577 284,577", "oneBedroom"];

var overlaysFive = [
"fiveD", "125,92 310,92 310,312 320,312 320,342 283,342 283,545 125,545", "threeBedroom",
"fiveE", "310,92 498,92 498,220 463,220 463,290 434,290 434,310 310,310", "oneBedroom",
"fiveF", "498,92 690,92 690,310 566,310 566,286 543,286 543,220 498,220", "oneBedroom",
"fiveA", "690,92 875,92 875,545 715,545 715,340 677,340 677,310 690,310", "threeBedroom",
"fiveB", "580,340 715,340 715,545 500,545 500,410 580,410", "oneBedroom",
"fiveC", "284,340 430,340 430,410 500,410 500,545 284,545", "oneBedroom"];

var overlaysSix = [
"sixE", "121,92 245,92 245,310 335,310 335,340 310,340 310,544 121,544", "twoBedroom",
"sixSevenF", "245,92 500,92 500,230 470,230 470,292 440,292 440,313 245,313", "threeBedroom",
"sixSevenA", "500,92 755,92 755,313 566,313 566,292 534,292 534,258 540,258 540,225 500,225", "threeBedroom",
"sixB", "755,92 877,92 877,544 690,544 690,340 665,340 665,310 755,310", "twoBedroom",
"sixD", "310,340 435,340 435,410 500,410 500,545 310,545", "oneBedroom",
"sixC", "575,340 690,340 690,545 500,545 500,410 575,410","oneBedroom",
];

var overlaysSeven = [
"sevenC", "120,92 325,92 325,280 310,283 310,370 283,370 283,552 120,552", "threeBedroom",
"sevenA", "325,92 673,92 673,252 540,250 540,225 468,225 468,250 325,250", "twoBedroom",
"sevenB", "673,92 879,92 879,552 718,552 718,370 690,370 690,280 673,280", "threeBedroom",
"sixSevenA", "560,283 690,283 690,370 718,370 718,552 500,552 500,410 577,410 577,335 560,335", "threeBedroom",
"sixSevenF", "310,283 435,283 435,410 500,410 500,552 283,552 283,370 310,370", "threeBedroom"];

// Defines Modal Window Contents, Used by changeFloorImage Function
function defineModalWindowContents(overlayID) {
	document.getElementById("modalParagraph").innerHTML = overlayID;
	document.getElementById("modalImage").src = "img/section-floorplans/" + overlayID + ".png";
};

// Helper: Handles the Menu
function makeActive(currentItem, totalItems) {

	for (i = 1; i <= totalItems; i ++) {
		document.getElementById("item-"+i).style.borderBottom = "none";
	}

	document.getElementById("item-"+currentItem).style.borderBottom = "3px solid #b32229";
}

// Start Function
function changeFloorImage(floor, array, currentItem, totalItems) {

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

	makeActive(currentItem, totalItems);

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
window.onload = changeFloorImage('Six', overlaysSix, 6, 7); 

