

var byOneHundred = function() {

    for (var i=0; i < 600; i += 100) {
        console.log(i);   
    }

}

var byDoubles = function () {
    
    for (var i=1; i < 128; i += i) {
        console.log(i);   
    }
    
}

var byTriples = function () {
    
    for (var i=1; i < 4; i++) {
        console.log(i);
        console.log(i); 
        console.log(i); 
    }
    
}

var byAddTwo = function () {
    
    for(var i = 0; i < 12; i+=2) {
        console.log(i);
    }
    
}

var byThrees = function () {
    
    for(var i = 3; i < 18; i+=3) {
        console.log(i);
    }
    
}

var byCountdown = function () {
    
    for(var i = 9; i > -1; i--) {
        console.log(i);
    }
    
}

var byUpAndDown = function () {
    
    
    for (var x=0; x < 3; x++) {
        
        for(var i = 0; i < 4; i++) {
            console.log(i);
        }
    }
}