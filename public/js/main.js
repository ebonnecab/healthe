// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
//Marks all the local farmer's markets in SF
let farmersMarkets = [
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
function setMarkers(map) {
    //adds markers to the map

    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < farmersMarkets.length; i++) {
        var farmersMarket = farmersMarkets[i];
        var marker = new google.maps.Marker({
            position: { lat: farmersMarket[1], lng: farmersMarket[2] },
            map: map,
            shape: shape,
            title: farmersMarket[0],
            zIndex: farmersMarket[3]
        });
    }
};

function initMap() {
    //latitude and longitude of SF
    const sanFrancisco = { lat: 37.7749, lng: -122.4194 };
    // The first map centered on SF
    const map = new google.maps.Map(
        document.getElementById('map'), { zoom: 12, center: sanFrancisco });

    setMarkers(map);


    
    
    const infoWindow = new google.maps.InfoWindow();

    // Show the information for a store when its marker is clicked.
    map.data.addListener('click', event => {

        let name = event.feature.getProperty('name');
        let hours = event.feature.getProperty('hours');
        let phone = event.feature.getProperty('phone');
        let position = event.feature.getGeometry().get();
        let content = `
      <h2>${name}</h2><p>${description}</p>
      <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
    `
        infoWindow.setContent(content);
        infoWindow.setPosition(position);
        infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
        infoWindow.open(map);
    });

}
