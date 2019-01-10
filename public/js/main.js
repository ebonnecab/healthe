function initMap() {
    //location of Heart of the City Farmer's Market
    var heartOfCity = { lat: 37.779892, lng: -122.414314 };
    // The map centered at the HOC
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: heartOfCity});

    setMarkers(map);
}
// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var farmersMarkets = [
  ["Heart of City Market", 37.779892, -122.414314, 16],
  ["Ferry Plaza Farmers Market", 37.795074, -122.39335, 15],
  ["SF Farmers Market at Crocker Galleria", 37.78945, -122.402885, 14],
  ["Fort Mason Center Farmers Market", 37.805336, -122.43019, 13],
  ["Fillmore Farmers Market", 37.783314, -122.432694, 12],
  ["Mission Bay Farmers Market at UCSF", 37.75541, -122.43286, 11],
  ["Divisadero Farmers Market", 37.775936, -122.43837, 10],
  ["North Beach Farmers Market", 37.80094, -122.41147, 9],
  ["Clement St. Farmers Market", 37.783092, -122.4615, 8],
  ["Noe Valley Farmers Market", 37.751514, -122.42898, 7],
  ["Alemany Farmers Market", 37.73604, -122.410225, 6],
  ["Castro Farmers Market", 37.764526, -122.43313, 5],
  ["Mission Community Market", 37.75541, -122.41976, 4],
  ["Fort Mason Center for Arts & Cultures Farmers Market", 37.805336, -122.43019, 3],
  ["4th Ave and Geary Farmers Market", 37.780991, -122.46193, 2],
  ["Inner Sunset Farmers Market", 37.763653, -122.46624, 1],
  ["Stonestown Farmers Market", 37.730125, -122.47915, 17]
];