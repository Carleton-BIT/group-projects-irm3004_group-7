var map = L.map('map', {
 crs: L.CRS.Simple
});
var bounds = [[0,0], [740,498]];
var image = L.imageOverlay("campusMap.png", bounds).addTo(map);
map.fitBounds(bounds);


//Academics
let first_layer;
const layer_1 = [first_layer];
a = generateObject("object_1", 185, 290, "Academic Advising Center <br> Location: Tory Building ",layer_1,'red');
b = generateObject("object_2", 120, 255, "Center for Student Academic Support <br> Location: Fourth floor of MacOdrum Library ",layer_1, 'red');
c = generateObject("object_3", 400, 410, "Ombuds Services <br> Location: Room 511B of the Carleton Technology & Training Center  ",layer_1,'red');
d = generateObject("object_4", 227, 275, "Science Student Success Center <br> Location: Herzberg Building   ",layer_1,'red');
generateLayer(layer_1);
addToLayer(a,layer_1);
addToLayer(b,layer_1);
addToLayer(c,layer_1);
addToLayer(d,layer_1);


//CUSA
let second_layer;
const layer_2 = [second_layer];


x = generateObject("object_5", 200, 350, "Carleton Disability Awareness Center (CDAC) <br> Room 424 <br><br> Gender & Sexuality Resource Center <br> Room 427 <br><br> Mawandoseg <br> Room 426 <br><br> Racialized & International Student Experience <br> Room 423 <br><br> Wellness Center <br> Room 403 <br><br> Health and Dental Plan <br> Room 401 <br><br> Legal Clinic <br> Room 401 <br><br> Unified Support Centre <br> Location: First Floor  <br><br> Breakfast Club <br> First Floor <br><br> Advocacy Clickline <br> Room 401 <br> Location: Nideyinàn ",layer_2);
generateLayer(layer_2);
addToLayer(x, layer_2);


//Health and Wellness Services
let third_layer;
const layer_3 = [third_layer];


x = generateObject("object_6", 190, 350, "Spirituality Center <br> Room 426 <br><br> Wellness Desk <br> Fourth Floor Atrium <br><br> Student Care Support Team <br> Room 430 <br><br> Sexual Assault Support Center <br> Room 424 <br> Location:Nideyinàn",layer_3,'gold');
y = generateObject("object_7", 400, 420, "Health and Counselling Services <br> Location: Carleton Technology & Training Center Room 2600",layer_3,'gold');
z = generateObject("object_8", 380, 540, "Carleton Athletics", layer_3,'gold');
generateLayer(layer_3);
addToLayer(x, layer_3);
addToLayer(y, layer_3);
addToLayer(z, layer_3);


//Financial
let fourth_layer;
const layer_4 = [fourth_layer];


x = generateObject("object_9", 370, 350, "Awards and Financial Aid <br> Room 202 <br><br> Financial Services <br> Student Accounts <br> Room 301 <br><br> Controller's Office <br> Room 603 <br><br> Payroll & Accounts Payable <br> Room 607 <br> Location: Pigiarvik ",layer_4,'violet');
y = generateObject("object_10", 185, 300, "Student Emergency Fund (SEF) <br> Location: Tory Building Room 430 ",layer_4,'violet');
generateLayer(layer_4);
addToLayer(x, layer_4);
addToLayer(y, layer_4);


//Student Centers
let fifth_layer;
const layer_5 = [fifth_layer];


x = generateObject("object_11", 190, 300, "Career Services <br> Room 401 <br><br> Student Experience Office <br> Room 430 <br> Location: Tory Building ",layer_5,'green');
y = generateObject("object_12", 200, 340, "Paul Menton Centre <br> Location: Nideyinàn Room 501",layer_5,'green');
z = generateObject("object_12", 120, 250, "GO-ISSO <br> Location:MacOdrum Library 4th Floor",layer_5,'green');
generateLayer(layer_5);
addToLayer(x, layer_5);
addToLayer(y, layer_5);
addToLayer(z, layer_5);


//Potential More Commits for more potential features h


function generateLayer(obj){
 obj[0] = L.layerGroup([]);
 obj[0].addTo(map);
 obj[1] = 0;
}


//Took some code from the Leaflet, looks way different than before so don't freak, though the code works now and the pin colours are now changeable
function generateObject(name, x, y, content, obj, color='blue'){
var icon = L.icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


name = L.marker([y,x], {icon: icon}).bindPopup(content);
return name;
}


function addToLayer(item,obj){
 item.addTo(obj[0]);
}


function addRemove(obj, ID){


    if (obj[1] === 1){
        obj[0].addTo(map);
        obj[1] = 0;
        document.getElementById(ID).style.backgroundColor = document.getElementById(ID).dataset.origColor;
    }else{
        obj[0].remove();
        obj[1] = 1;
        document.getElementById(ID).dataset.origColor = document.getElementById(ID).style.backgroundColor;
        document.getElementById(ID).style.backgroundColor = "rgba(192,192,192,1)";
    }
      map.on('click', function(e) {
          console.log(e.latlng.lat, e.latlng.lng);       });



}



