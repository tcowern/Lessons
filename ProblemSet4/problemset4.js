var addNumbers = function(str) {
  
  var nums = 0;
  var newStr = "";
  var myArray = [];
  
  for(var i = 0; i < str.length; i++) {
    
  

      if(isNaN(str[i]) === false) {
        
        if(isNaN(str[i] && str[i + 1]) === false) {
        
          newStr = str[i] + str[i + 1];
          
          myArray.push(newStr);
          
          i++;
       
        }  else {
          
          myArray.push(str[i]);
        }
//               console.log(myArray);
      }
    
    }
  
   var ansArray = [];
  
//    var answer = myArray.map().parseInt();
          
    
   for(var x = 0; x < myArray.length; x++){
       ansArray.push(+(myArray[x]));
     }
        
   function getSome(total, num) {
     return total + num;
   }
      
    var final = ansArray.reduce(getSome);
  
  
  console.log(final); 
}


addNumbers("88Hello 3World!");