var L = require('leaflet');
var Tangram = require('tangram');

var map = L.map('map');
var layer = Tangram.leafletLayer({
  scene: {
    'import': 'https://mapzen.com/carto/bubble-wrap-style/7/bubble-wrap-style.zip',
    // TODO: get your own API key at https://mapzen.com/dashboard/. It's free!
    'global': { 'sdk_mapzen_api_key': 'mapzen-8SeUVxf' }
  },
  attribution: '<a href="https://mapzen.com/tangram">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/">Mapzen</a>'
});

layer.addTo(map);

map.setView([40.70531887544228, -74.00976419448853], 15);
