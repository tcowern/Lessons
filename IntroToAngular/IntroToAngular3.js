angular.module("mainApp", []);

angular.module("mainApp")
  .controller("myHide", myHide); 
  myHide.$inject=["$scope"];
  $scope.myVal = false;
  $scope.toggle = function () {
    $scope.myVal = !$scope.myVal;
  };
 


 


