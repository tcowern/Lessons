var victimName = [];
var victimAdd = [];
var victimPhone = [];

var volName = [];
var volAdd = [];
var volPhone = [];
var addressList = [];

var victimCount = prompt("How many victims are there?");
    for (var i = 0; i < victimCount; i++) {
        var victimInfo = prompt("Enter the victim's name, address and phone number seperated by commas" );
        victimInfo = victimInfo.split(',');
            var newName = (victimInfo[0]);
            var newAdd = (victimInfo[1]);
            var newPhone = (victimInfo[2]);

            victimName.push(newName);
            victimAdd.push(newAdd);
            victimPhone.push(newPhone);
    }


    
var voluntCount = prompt("How many volunteers are there?");
    for (var i = 0; i < voluntCount; i++) {
        var voluntInfo = prompt("Enter the volunteers's name, address and phone number seperated by commas" );
        voluntInfo = voluntInfo.split(',');
            var newName = (voluntInfo[0]);
            var newAdd = (voluntInfo[1]);
            var newPhone = (voluntInfo[2]);

            volName.push(newName);
            volAdd.push(newAdd);
            volPhone.push(newPhone);
    }
    
            var listVolName = volName.toString();
            var listVolAdd = volAdd.toString();
            var listVolPhone = volPhone.toString();
            
            alert("Number of victims: " + victimCount + "\n" + "Number of volunteers: " + voluntCount + "\n" + "Victim Names: " + victimName + "\n"  + "Names of volunteers: " + volName);