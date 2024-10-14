function init() {
    map = new OpenLayers.Map("ucolMap");
    var mapnik         = new OpenLayers.Layer.OSM();
    var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    var position       = new OpenLayers.LonLat(175.61353382992954,-40.35221938661656).transform( fromProjection, toProjection);
    var zoom           = 18; 

    map.addLayer(mapnik);
    map.setCenter(position, zoom );
    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    markers.addMarker(new OpenLayers.Marker(position));
}