var getString = function() {
    var myString = prompt("Please enter a string", "Enter a String");
        var myLength = myString.length;                                                                // function getName uses a propmt to get the user's name (name)
    alert("Your String: " + myString + "\nYour String Length: " + myLength + "\nYour Lowercase String: " + myString.toLowerCase()  + "\nYour Uppercase String: " + myString.toUpperCase() + "\nYour " + myString + " in a sentence" + "\nSecond to Fourth letter: " + myString.substr(1,3));                                 //  and triggers an alert bos that displays "Hello name"
    }