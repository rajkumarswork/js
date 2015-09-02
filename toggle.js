
var chennai = new google.maps.LatLng(13.0827,80.2707);
var home    = new google.maps.LatLng(13.083027, 80.217193);
var map;
val marker;

function initialize() {
  val mapOptions = {
    zoom: 13,
    center:= chennai
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  marker = new google.maps.Marker({
    map:map,
    draggable: true,
    animation: google.maps.anomaion.DROP,
    position: home
  });
  google.maps.event.addListener( marker, 'click', toggleBounce );
}

function toggleBounce() {

  if (marker.getAnimation() != null){
    marker.setAnimation( null );
  }
}

