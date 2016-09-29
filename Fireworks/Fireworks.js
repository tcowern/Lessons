// document.body.onload = setTravelers;

var setTravelers = function() {                                 //setTravelers function 
    var numTravelers = (Math.floor((Math.random() * 10) + 5));  // randomize a numbeer between 5 nd 10
    for (var i = 1; i < numTravelers; i++) {                    // Iterates creating div elemnts based on random number
        var newTrav = document.createElement("div");             // creates new div
        newTrav.id = "traveler" + i;
        var oldStage = document.getElementById("stage");
        oldStage.appendChild(newTrav); 
        var newDiv = document.createElement("div"); 
        newDiv.id = "bouncer" + i;                              // names new div
        newDiv.innerText = "";                                  // sets inner text to nothing
        var oldTrav = document.getElementById("traveler" + i);      // finds parent element where new div will be added
        oldTrav.appendChild(newDiv);                            // appends new div to HTML
        
        document.getElementById("traveler" + i).setAttribute("position", "absolute");
        document.getElementById("traveler" + i).setAttribute("width", "20px");
        document.getElementById("traveler" + i).setAttribute("height", "300px");
        document.getElementById("traveler" + i).setAttribute("animation-name", "travel" + i);
        document.getElementById("traveler" + i).setAttribute("animation-timing-function", "linear");
        document.getElementById("traveler" + i).setAttribute("animation-iteration-count", "infinite");
        document.getElementById("traveler" + i).setAttribute("animation-direction", "alternate");
        document.getElementById("traveler" + i).setAttribute("animation-duration", "4.8s");
        
        document.getElementById("bouncer" + i).setAttribute("position", "absolute");
        document.getElementById("bouncer" + i).setAttribute("width", "10px");
        document.getElementById("bouncer" + i).setAttribute("height", "10px");
        document.getElementById("bouncer" + i).setAttribute("border-radius", "5px");
        document.getElementById("bouncer" + i).setAttribute("position", "absolute");
        document.getElementById("bouncer" + i).setAttribute("background", "-webkit-radial-gradient(60% 40%, circle, rgba(255,255,255,0.8), red 50%) red;");
        document.getElementById("bouncer" + i).setAttribute("background", "-moz-radial-gradient(60% 40%, circle, rgba(255,255,255,0.8), red 50%) red;");
        document.getElementById("bouncer" + i).setAttribute("background", "-o-radial-gradient(60% 40%, circle, rgba(255,255,255,0.8), red 50%) red;");
        document.getElementById("bouncer" + i).setAttribute("background", "-ms-radial-gradient(60% 40%, circle, rgba(255,255,255,0.8), red 50%) red");
        document.getElementById("bouncer" + i).setAttribute("background", "radial-gradient(60% 40%, circle, rgba(255,255,255,0.8), red 50%) red");
        // document.getElementById("bouncer" + i).setAttribute("-webkit-animation-name:", "bounce, spin;");
        // document.getElementById("bouncer" + i).setAttribute("-webkit-animation-iteration-count:", "infinite;");
        // document.getElementById("bouncer" + i).setAttribute("-webkit-animation-duration:", "5s;");
        document.getElementById("bouncer" + i).setAttribute("animation-name:", "bounce" + i + ", spin" + i + ";");
        document.getElementById("bouncer" + i).setAttribute("animation-iteration-count:", "infinite;");
        document.getElementById("bouncer" + i).setAttribute("animation-duration:", "5s;");
    }
}
