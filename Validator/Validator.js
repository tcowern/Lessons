var getPhone = function() {
    var myPhone = prompt("Please enter a phone number", "Enter a Phone Number");  //gets the user input
        if((myPhone.charAt(3) === '-' && myPhone.charAt(7) === '-' && myPhone.length === 12) === true) {  //compares user input with requirements
            alert("Thanks you for entering a correctly formatted numner!")  // message is user input meets specifications
        } else {
            alert("Please enter a correctly formatted phone number!")  // message is user input does not meet specifications
        }                                                       
    }
    
var getBDate = function() {
    var myBDate = prompt("Please enter your birth date like this: mm/dd/yy");
        if((myBDate.charAt(2) === '/' && myBDate.charAt(5) === '/') === true) {
            var newDate = myBDate.replace(/[a-zA-Z&\/\\#,+()$~%.'":*?<>{}]/g, '');
//                alert(newDate);
                if (newDate.length === 6) {
                    alert('Thanks for entering the date in correct format')
                } else {
                    alert('Please enter the date in correct format')
                }
                    
        } else {
                    alert('Please enter the date in correct format')            
        }
}

var getPostal = function() {
    var myPostal = prompt("Please enter your postal code");
        var newPostal = myPostal.replace(/\D/g, '');
                alert(newPostal + " " + newPostal.length);
            if (newPostal.length === 5 || newPostal.length === 9) {
                alert('Thanks for entering your postal code in correct format');                
            } else {
                alert('Please enter your postal code in correct format');
            }

}

var getState = function() {
    var myState = prompt("Please enter your State abbreviation using 2 Capital letters such as: XX");
        var newState = myState.replace(/[a-z0-9-_&\/\\#,+()$~%.'":*?<>{}]/g, '');
                // alert(newState + " " + newState.length);
            if (newState.length === 2) {
                alert('Thanks for entering your State abbreviation in correct format!');                
            } else {
                alert('Please enter your State abbreviation in correct format: XX');
            }

}

var getDivorce = function() {
    var myDivorce = prompt("Are you Married?  Please answer Yes or No");
        var newDivorce = myDivorce.toUpperCase();
                // alert(newState + " " + newState.length);
            if (newDivorce === 'YES') {
                alert('What the hell are you thinking?');                
            } else {
                alert("Thank God you're single, stay that way and don't get stupid!");
            }

}