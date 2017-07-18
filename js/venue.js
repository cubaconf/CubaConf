$(function() {
  var map = L.map('map').setView([23.13967, -82.35106], 15);

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors</a>',
    maxZoom: 18,
  }).addTo(map);

  L.marker([23.13967, -82.35106]).addTo(map);

  map.scrollWheelZoom.disable();
});
