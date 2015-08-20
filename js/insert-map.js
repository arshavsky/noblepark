function init_map() {
		var var_location = new google.maps.LatLng(-36.86048,174.76637);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 13,
          scrollwheel: false,
          mapTypeId:google.maps.MapTypeId.TERRAIN
        };
 
		var var_marker = new google.maps.Marker({
			position: var_location,
            map: var_map,
			title:"Noble Park Residences"});
 
        var var_map = new google.maps.Map(document.getElementById("location-map"),
            var_mapoptions);
 
		var_marker.setMap(var_map);	
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);