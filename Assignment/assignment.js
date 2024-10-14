

// map function
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


let handleMousemove = (event) => {
    let posX = event.x
    let posY = event.y
    document.getElementById("mousePosX").innerText = `mouse X: ${posX}`
    document.getElementById("mousePosY").innerText = `mouse Y: ${posY}`
  }
document.addEventListener('mousemove', handleMousemove);

function displayXY(){
    document.getElementById("table").style.display ="none";
    document.getElementById("mousePosY").style.display ="block";
    document.getElementById("mousePosX").style.display ="block";
    console.log('hidden');
}

function showDataTable(){
    document.getElementById("mousePosY").style.display ="none";
    document.getElementById("mousePosX").style.display ="none";
    document.getElementById("table").style.display ="table";
    console.log('shown');
}


function themeClick() {

    let root = document.querySelector(':root');
    let rootStyle = getComputedStyle(root);
    let curentBackground = rootStyle.getPropertyValue('--backgroundColour')
    if (curentBackground == '#428bca'){
        root.style.setProperty('--backgroundColour', '#11C034');
        console.log('green time')
    }
    else{
        if (curentBackground == '#11C034'){
            root.style.setProperty('--backgroundColour', '#428bca');
            console.log('blue time')
        }
    }
}


function modal(){

    if (document.getElementById("modal").style.display == "block"){
        document.getElementById("modal").style.display = "none"
    }
    else{
            document.getElementById("modal").style.display ="block";
    }
}

function swapImage(){
    if (document.getElementById("image").src == "http://127.0.0.1:5500/Assignment/images/people.jpg"){
        document.getElementById("image").src = "http://127.0.0.1:5500/Assignment/images/business.jpg"
        document.getElementById("image2").src = "http://127.0.0.1:5500/Assignment/images/business.jpg"
        
    }
    else{
        console.log(document.getElementById("image").src)
        if(document.getElementById("image").src == "http://127.0.0.1:5500/Assignment/images/business.jpg"){
            document.getElementById("image").src = "http://127.0.0.1:5500/Assignment/images/people.jpg"
                document.getElementById("image2").src = "http://127.0.0.1:5500/Assignment/images/people.jpg"
        }
    }
}
