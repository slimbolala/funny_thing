var map = new L.Map('map');

var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/872ba53dc30c4a8d95dec4abb094f8ff/41400/256/{z}/{x}/{y}.png',
cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 13});
map.setView(new L.LatLng(38.02931, -78.47668), 13).addLayer(cloudmade);

var cville = new L.Marker(new L.LatLng(38.03, -78.48)),
    cville2myrtle = new L.Marker(new L.LatLng(36.07264, -79.79197));

cville.bindPopup('<h3>Prelude</h3><img src="http://photos1.blogger.com/img/70/3466/400/image0-15.jpg" style="float: left; width: 240px; margin: 10px;">It once was <a href="http://slimbolala.blogspot.com/2005/02/this-blog-is-your-blog.html#comments">asked</a>, "what was the funny thing that happened on the way to New Mexico?" The answer is that there were actually several "funny" things that happened, if by "funny" one means, "bitterly miserable but happened a long time ago."</p><p>Sarah and I spent the summer between Sophomore and Junior years living in my home town of Charlottesville, VA. At the beginning of summer I bought an early 70s Volkswagen camper bus for $1000. It was remarkable. It drove like a school bus, and it still had all of the old camper equipment: the backseat that folded out into a bed, the little table, the sink, and the countless cabinets and cubbies. It was not perfect. It was rusting, and it broke down with some frequency, but I loved it. And I had big plans for it. At the end of summer, I would take it on a giant road trip, from Charlottesville to Miami, dropping Sarah off at her parents, then up and over to New Orleans to see my grandparents and finally on to Santa Fe, NM (my first time out west) where I would be spending the fall semester.</p><p>Things didn\'t go precisely as planned.</p><h3>Before departure, Charlottesville</h3><p>We pack everything I own into the bus. Remarkably compact. Ship shape.</p><p class="next"><a href="_________________">next ></a></p>');
cville2myrtle.bindPopup('<h3>Charlottesville to Myrtle Beach</h3><p>We head south, smooth sailing.</p><p class="next"><a href="_________________">next ></a></p>');

map.addLayer(cville).addLayer(cville2myrtle);
