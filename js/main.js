$(document).ready(function(){

	$('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'masonry'
		//columnWidth: 320,
		//isAnimated: true
	});

	// $('.car').jCarouselLite({
  	// btnNext: '.next',
  	// btnPrev: '.prev',
		// containerSelector: '.slide-container',
		// itemSelector: '.slide'
	// });

	//21.731, -80.239, 8
	var map = L.map('map', {
		zoomControl: false
		}).setView([21.731, -79.569], 7);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    	maxZoom: 18,
    	id: 'elpbatista.n56ifpal',
    	accessToken: 'pk.eyJ1IjoiZWxwYmF0aXN0YSIsImEiOiJ4YlBmNmlJIn0.x0lZKcK907BWTS4LV9dkHA',
		}).addTo(map);

	L.control.zoom({
    	position: 'bottomright'
		}).addTo(map);


});
