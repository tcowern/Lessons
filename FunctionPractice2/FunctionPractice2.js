
function getName(info) {
  return info.name;

}

function totalLetters(myArray) {
  var myCount = 0;
  for (var i = 0; i < myArray.length; i++) {
    var myString = myArray[i];
    myCount = myCount + myString.length;
  }  
    return myCount;
}

function keyValue( str1, str2) {
    var key = str1;
    var value = '"' + str2 + '"';
    console.log(str1 + ": " + str2);
    return(str1 + ": " + str2);

  }

function negativeIndex(negArray, num) {
  var arrayLength = negArray.length;
  var negNum = arrayLength - (num * -1);
  var retValue = negArray[negNum];
  return retValue;
}

function removeM (str) {
    for(var i = 0; i < str.length; i++) {
      var myLetter = str.charAt(i)
        if (myLetter === m) {
          str.slice(i,i);
        } 
    }
}