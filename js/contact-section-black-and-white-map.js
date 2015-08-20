window.marker = null;
		 
			function initialize() {
				var map;

				var noblepark = new google.maps.LatLng(-36.86061238, 174.76659715);
				
				var billboard = new google.maps.LatLng(-36.857304, 174.774156);

				var style = [ 
					{ "featureType": "road", 
					   "elementType": 
					   "labels.icon", 
					   "stylers": [ 
						  { "saturation": 1 }, 
						  { "gamma": 1 }, 
						  { "visibility": "on" }, 
						  { "hue": "#52CC29" } 
					   ] 
					},
					{ "elementType": "geometry", "stylers": [ 
						{ "saturation": -100 } 
					  ] 
					} 
				];

				var mapOptions = {
					// SET THE CENTER
					center: noblepark,

					// SET THE MAP STYLE & ZOOM LEVEL
					mapTypeId: google.maps.MapTypeId.TERRAIN,
					zoom:14,

					// SET THE BACKGROUND COLOUR
					backgroundColor:"#eeeeee",

					// REMOVE ALL THE ZoomControlStyle
					draggable: false,
					disableDoubleClickZoom: true,
					scrollwheel: false,
					panControl:false,
					zoomControl:false,
					mapTypeControl:false,
					scaleControl:false,
					streetViewControl:false,
					overviewMapControl:false,
					//zoomControlOptions: {
						//style:google.maps.ZoomControlStyle.SMALL
					//}

				}
				map = new google.maps.Map(document.getElementById('contact-section-map'), mapOptions);

				// SET THE MAP TYPE
				var mapType = new google.maps.StyledMapType(style, {name:"Grayscale"});    
				map.mapTypes.set('grey', mapType);
				map.setMapTypeId('grey');

				//CREATE A CUSTOM PIN ICON
				var marker_image ='img/section-contact/marker-noble-park.png';
				var pinIcon = new google.maps.MarkerImage(marker_image,null,null, null,new google.maps.Size(120, 90));    

				// CREATE ANOTHER CUSTOM ICON
				var marker_image_2 ='img/section-contact/red-dot.png';
				var pinIcon_2 = new google.maps.MarkerImage(marker_image_2,null,null, null,new google.maps.Size(20, 20)); 

				marker = new google.maps.Marker({
				  position: noblepark,
				  map: map,
				  icon: pinIcon_2,
				  title: 'Noble Park Residences'
				});

				marker = new google.maps.Marker({
				  position: billboard,
				  map: map,
				  icon: pinIcon,
				  title: 'Noble Park Residences'
				});
			}

			google.maps.event.addDomListener(window, 'load', initialize);