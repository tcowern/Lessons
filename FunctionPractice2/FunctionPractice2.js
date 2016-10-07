
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
     var answer = str.replace(/m/gi, '');
     console.log(answer);
     return answer;
}

function printObject (myObject){

  var object = "";  
  for(object in myObject){
        console.log(object + " is " + myObject[object]);

    }
}

function vowels(myStr){
  var myArray = [];
  for (var i =0; i < myStr.length; i++) {
    if (myStr[i] === 'a' || myStr[i] === 'e' || myStr[i] === 'i' || myStr[i] === 'o' || myStr[i] === 'u') {
      myArray.push(myStr[i]);
    }
  }
  console.log(myArray);
  return myArray;
}

function twins(myArr){
  var pairs = "";
  var notpairs = "";
  var paircheck
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] === myArr[i + 1]) {
      pairs++;
    } else {
      notpairs++;
    }
    
    if(pairs === notpairs) {
      paircheck = true;
    } else {
      paircheck = false; 
    }
  }
  console.log(paircheck);
  return paircheck;
}

function or (myArr) {
  var truth = "";
  if (myArr.length === 0) {
    console.log("false");
    return false;
  }
  for (var i = 0; i < myArr.length; i++) {
    if (myArr[i] === true) {
        console.log("True event");
        truth = true;
        break;
    } else {
        console.log("False event");
        truth = false;
    }

  }
        console.log("truth is " + truth);
        return truth;
}