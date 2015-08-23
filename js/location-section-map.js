jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        draggable: false,
        scrollwheel: false,
        mapTypeId: 'terrain',
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("location-section-map"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Auckland University, Grafton Campus', -36.861717, 174.769424],
        ['Auckland Boys Grammar', -36.872432,174.768126],
        ['ACG Parnell College', -36.863163,174.778555],
        ['Epsom Girls Grammar', -36.876177,174.773639],
        ['Auckland University Newmarket Campus', -36.865905,174.7733],
        ['St Peters College', -36.868412,174.768575],
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Auckland University, Grafton Campus</h3>' +
        '<p>Spacious apartments, with no compromise on quality, for luxurious living. Constructed to the highest standard, with style and comfort in mind. The James is a place to call home.</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Auckland Boys Grammar</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>ACG Parnell College</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Epsom Girls Grammar</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Auckland University Newmarket Campus</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>St Peters College</h3>' +
        '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
        '</div>'],
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });
    
}