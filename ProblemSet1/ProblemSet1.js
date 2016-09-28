

var letterCapitalize = function (strVar) {
    var strVar = prompt("Enter a string");
    var cutString = strVar.split(" ");
    var newString = [];
    var oldString = [];

    for(var i = 0; i < cutString.length; i++) {

      newString[i] = cutString[i].charAt(0).toUpperCase();
      oldString[i] = newString[i] + cutString[i].slice(1,cutString[i].length);

    var answer = oldString.join(" ");

    }
    
    alert(answer);

}

var wordCount = function () {
    var count = 0;
    var strVar = prompt("Enter a string");
        for(var i =0; i < strVar.length; i++) {
            if(strVar[i] === " ") {
                count = count + 1;
            } 
        }

        alert("There are " + (count +1) + " words in this sentence");
        
}

var primeTime = function () {
    var myNum = prompt("Enter a number between 1 and 216");
    var isPrime = 0;
        for(var i = 2; i < myNum; i++) {
            if(myNum%i === 0) {
            isPrime++;
            }
            
        }
        
    if(isPrime > 0) {
        alert("Not a Prime")
    } else {
        alert("Prime");
    }
}