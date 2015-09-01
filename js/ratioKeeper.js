function ratioKeeper() {
	var width_1 = document.getElementById("location-section-map").offsetWidth;
	var width_2 = document.getElementById("location-section-overlay").offsetWidth;
	
	var setHeight = Math.round((width_1 + width_2)/ 2.35);
	document.getElementById("location-section-map").style.height = setHeight + "px";
	document.getElementById("location-section-overlay").style.height = setHeight + "px";
}

ratioKeeper();