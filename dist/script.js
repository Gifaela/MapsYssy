// Name: Giulia Rafaela Potenza Dias; Age: 24 years; Date: 03/20/2023.

// The project is a test proposed by the company Yssy with the objective of identifying addresses on the map using the google API. 

var map;
// Loads a JSON file a URL and returns an Object
// https://p5js.org/reference/#/p5/loadJSON

loadJSON("http://localhost:3000/enderecos", initialize,'jsonp');

// Method to open JSON file
function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      }
      else {
        error(xhr);
      }
    }
  };
  xhr.open('GET', path, true);
  // 
  xhr.send();
}



// Function that initializes the Map and receives the Json object
// https://developers.google.com/maps/documentation/javascript/overview?hl=pt-br
function initialize(Data) {

  // Giving the size and depth to the Map
  var mapOpt = {
    zoom: 4,
    center: new google.maps.LatLng(-11.4960,-50.5918)
  };
  
  // Creating the Map
  map = new google.maps.Map(document.getElementById('maps-canva'), mapOpt);
  
  
  // Looping to find all addresses and print object information
  for(var i = 0; i < Data.length; i++) {
    
    // Current object
    var obj = Data[i];
    console.log(Data[i].name);
    console.log(Data[i].lat);
    console.log(Data[i].lng);

    // Adding new maker to object
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(obj.lat,obj.lng),
      
      map: map,
      title: obj.name 
    });
    
    // Adding information from the addCliker method to var Cliker
    var clicker = addClicker(marker, obj.name);
    
  } 

  
  // Adding a new click listener to the object

  function addClicker(marker, content) {
    google.maps.event.addListener(marker, 'click', function() {
      
      if (infowindow) {infowindow.close();}
      infowindow = new google.maps.InfoWindow({content: content});
      infowindow.open(map, marker);
      
    });
  }
  
}

google.maps.event.addDomListener(window, 'load', initialize);