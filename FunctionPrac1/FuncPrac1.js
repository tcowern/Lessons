var tripleFive = function() {
    for (var i = 0; i < 3; i++) {           // for loop counts 3 times
        console.log('Five!');               // prints 'Five'
    }
}

var lastLetter = function() {
    var myString = prompt("Please enter a string and I'll return the last letter!")                 // gets a string from the user
        console.log("The last letter in your string is " + myString.charAt(myString.length - 1));   // prints the last letter of the string
}

var square = function(number) {                                             // calls square with a number from html
        console.log("The square of your number is " + number*number);       // prints the result of nimber x number
}

var negate = function(number) {
        var myResult = Math.sign(number)
        if (myResult === 1) {
            myResult = (-Math.abs(number));
            console.log(myResult);
        } else {
            myResult = (Math.abs(number));
            console.log(myResult);
        }
}

var toArray = function() {
        console.log(Array.from(arguments));
}

var startsWithA = function() {
        var myString = prompt("Please enter a string and I'll check to see if it starts with A")
        // alert(myString.charAt(0));
        var firstLetter = myString.charAt(0).toLowerCase();
        if (firstLetter == 'a') {
            console.log("True");
            // return true;
        } else {
            console.log("False");
            // return false;
        }
}

var excite = function() {
   var myString = prompt("Please enter a string and I'll excite it")
        console.log(myString + "!!!");
}

var sun = function() {
    var myString = prompt("Please enter a string and I'll check to see if the word 'sun' is in it")
        myString = myString.toLowerCase();
    var answer = myString.indexOf('sun');
        if (answer === -1) {
            console.log("False");
        } else {
            console.log("True");
        }
}

var tiny = function() {
    var myNumber = prompt("Please enter a number and I'll tell you if it's tiny")
        if (myNumber > 0 && myNumber < 1) {
            console.log("True");
        } else {    
        
            console.log("False");
        }
}

var getSeconds = function() {
    var myString = prompt("Please enter a time im MM:SS format and I'll convert it to seconds")
        var min = Number(myString.substr(0,2));
        var sec = Number(myString.substr(3,4));
        console.log(sec);
        console.log(min);
        var answer = min*60 + sec;
        console.log("Your time is equal to " + answer + " seconds");
}