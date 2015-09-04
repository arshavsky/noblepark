/*var floorThreeOverlays = "<a xlink:href = '#openModal'>
			  				<polygon class = 'apartment-overlay' id = 'three-e' points='231,400 415,400 415,486 498,486 498,840 231,840'></polygon>
			  			</a>
			  			<a xlink:href = '#openModal'>
			  				<polygon class = 'apartment-overlay' id = 'three-d' points='580,400 768,400 768,840 502,840 502,486 580,486'></polygon>
			  			</a>
			  			<a xlink:href = '#openModal'>
			  				<polygon class = 'apartment-overlay' id = 'three-c' points='795,358 972,358 972,840 773,840 773,415 795,415'></polygon>
			  			</a>
			  			<a xlink:href = '#openModal'>
			  				<polygon class = 'apartment-overlay' id = 'three-b' points='740,88 972,88 972,353 740,353'></polygon>
			  			</a>
			  			<a xlink:href = '#openModal'>
			  				<polygon class = 'apartment-overlay' id = 'three-a' points='495,88 735,88 735,353 585,353 585,333 553,333 553,242 495,242'></polygon>
			  			</a>
			  			<a xlink:href = '#openModal'>
			  				<polygon class = 'apartment-overlay' id = 'three-h' points='255,88 495,88 495,242 453,242 453,340 420,340 420,353 255,353'></polygon>
			  			</a>
			  			<a xlink:href = '#openModal'>
			  				<polygon class = 'apartment-overlay' id = 'three-g' points='25,88 257,88 257,353 25,353'></polygon>
			  			</a>
			  			<a xlink:href = '#openModal'>
			  				<polygon class = 'apartment-overlay' id = 'three-f' points='25,355 202,355 202,418 225,418 225,840 185,840 25,675'></polygon>
			  			</a>";*/


// Change floor image, define new apartment coordinates.

function changeFloorImage(floor) {
	
	// define overlays
	var overlays = document.getElementById("svg-overlays");
	var anchor = document.createElementNS("http://www.w3.org/2000/svg", "a");
	
	// define a polygon
	var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
	
	// replace floor image on click
	overlays.style.background = "url('img/section-floorplans/level" + floor + ".png')";
	overlays.style.backgroundSize = "contain";
	overlays.style.backgroundRepeat = "no-repeat";

	// add an anchor
	anchor.setAttribute("xlink:href", "#openModal");
	
	// add a polygon
	polygon.setAttribute("points", "740,88 972,88 972,353 740,353");
	polygon.setAttribute("class", "apartment-overlay");
	// append
	anchor.appendChild(polygon);
	overlays.appendChild(anchor);

};