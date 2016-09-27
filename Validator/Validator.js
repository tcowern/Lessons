


var getPhone = function() {
    var myPhone = prompt("Please enter a phone number", "Enter a Phone Number");  //gets the user input
        if((myPhone.charAt(3) === '-' && myPhone.charAt(7) === '-' && myPhone.length === 12) === true) {  //compares user input with requirements
            alert("Thanks you for entering a correctly formatted numner!")  // message is user input meets specifications
        } else {
            alert("Please enter a correctly formatted phone number!")  // message is user input does not meet specifications
        }                                                       
    }
    
var getBDate = function() {
    var myBDate = prompt("Please enter your birth date like this: mm/dd/yy"); //gets the user date
        if((myBDate.charAt(2) === '/' && myBDate.charAt(5) === '/') === true) { //checks to see if the date is correctly formated using '/'
            var newDate = myBDate.replace(/[a-zA-Z-_&\/\\#,+()$~%.'":*?<>{}]/g, ''); // removes everything not a number
//                alert(newDate);
                if (newDate.length === 6) {                                         // checks to see if the new date has 6 numbers
                    alert('Thanks for entering the date in correct format')         // if it does congratulates the user on being smart
                } else {
                    alert('Please enter the date in correct format')                // otherwise calls the user a dumbass
                }
                    
        } else {
                    alert('Please enter the date in correct format')                // error message if the '/' seprators are not in place
        }
}

var getPostal = function() {
    var myPostal = prompt("Please enter your postal code");                         // propmts the user to enter zip code
        var newPostal = myPostal.replace(/\D/g, '');                                // removes anything not a number
                // alert(newPostal + " " + newPostal.length);                          
            if (newPostal.length === 5 || newPostal.length === 9) {                 // checks variable length to see if it is correctly formatted
                alert('Thanks for entering your postal code in correct format');    // if correctly formatted it lets the user know
            } else {
                alert('Please enter your postal code in correct format');           // if incorrect lets the user know as well
            }

}

var getState = function() {
    var myState = prompt("Please enter your State abbreviation using 2 Capital letters such as: XX");   // prompts the user to enter a 2 digit state abbreviation
        var newState = myState.replace(/[a-z0-9-_&\/\\#,+()$~%.'":*?<>{}]/g, '');                       // removes anything not a letter
                // alert(newState + " " + newState.length);
            if (newState.length === 2) {                                                                // checks to see if abb entered is 2 digits
            
                alert('Thanks for entering your State abbreviation in correct format!');                // if correctly formatted it lets the user know
            } else {
                alert('Please enter your State abbreviation in correct format: XX');                    // if incorrect lets the user know as well
            }

}

var getDivorce = function() {
    var myDivorce = prompt("Are you Married?  Please answer Yes or No");                    // prompts the user to enter yes or no to marriage query 
        var newDivorce = myDivorce.toUpperCase();                                           // forces answer to upper case
                // alert(newState + " " + newState.length);
            if (newDivorce === 'YES') {                                                     // if yes sends a message
                alert('What the hell are you thinking?');                
            } else {
                alert("Thank God you're single, stay that way and don't get stupid!");      // if no sends another message
            }

}