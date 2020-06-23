function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 50.830006,
      lng: -0.263174,
    },
  });

  var labels = "";

  var locations = [
    { lat: 50.832776, lng: -0.139623 },
    { lat: 50.819230, lng: -0.135312 },
    { lat: 50.810812, lng: -0.372554 },
    { lat: 50.832765, lng: -0.137461 },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}