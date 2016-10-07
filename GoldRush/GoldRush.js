function showCoords(event) {

    var X = event.screenX;
    var Y = event.screenY;
    var coords = "Coordinates: " + X + ",  " + Y;
    console.log(coords);
    
    // document.getElementById("coordprint").innerHTML =  coords;

    var para = document.createElement("div");
    var node = document.createTextNode("X");
    var treasure = document.createAttribute("class");
    var left = document.createAttribute("left");
    var top = document.createAttribute("top");
    // left.value = X + "px";
    // top.value = Y + "px";
    para.style.position="absolute";
    para.style.left = X + "px";
    para.style.top =  Y + "px";
    
    para.setAttributeNode(left);
    para.setAttributeNode(top);
    treasure.value = "treasureclass";
    para.setAttributeNode(treasure);
    para.appendChild(node);


    var element = document.getElementById("coordprint");
    var child = document.getElementById("div");
    element.appendChild(para,child); 


}