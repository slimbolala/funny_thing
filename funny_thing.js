var map = new L.Map('map');
var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/872ba53dc30c4a8d95dec4abb094f8ff/41400/256/{z}/{x}/{y}.png',
cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18});
map.setView(new L.LatLng(38.03, -78.48), 13).addLayer(cloudmade);

var markerLocation = new L.LatLng(38.03, -78.48), marker = new L.Marker(markerLocation);
map.addLayer(marker);
marker.bindPopup('<h3>Before Departure, Charlottesville</h3><p>We pack everything I own into the bus. Remarkably compact. Ship shape.</p><p class="next"><a href="_________________">next ></a></p>').openPopup();

marker2 = new L.Marker(L.LatLng(36.07264, -79.79197));
//      map.addLayer(marker2);
//      marker2.bindPopup('<h3>Charlottesville to Myrtle Beach</h3><p>We head south, smooth sailing.</p>')
