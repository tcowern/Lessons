// var myApp = angular
//                     .module("myModule", [])
//                      .controller("myController", ['$scope', "$log", function($scope, $log) {
//                          $scope.$log = $log;
//                          $scope.message = "Print something to the log";
//                      }]);


 var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});



