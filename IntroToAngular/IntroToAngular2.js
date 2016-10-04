angular.module("mainApp", []);

angular.module("mainApp")
  .controller("myExclamation", myExp); 
  myExp.$inject=["$scope"];
  function myExp($scope) {
    var heading1 = document.getElementsByTagName("h1");
    for(i=0; i<heading1.length; i++) {
    heading1[i].innerText = heading1[i].innerText + "!";
  }};
 
angular.module("mainApp") 
 .controller("myLink", myLink);
 myLink.$inject=["$scope"]; 
 function myLink($scope) {
   console.log("You clicked on a link!");
 }  

 


