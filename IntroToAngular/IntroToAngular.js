// var myApp = angular
//                     .module("myModule", [])
//                      .controller("myController", ['$scope', "$log", function($scope, $log) {
//                          $scope.$log = $log;
//                          $scope.message = "Print something to the log";
//                      }]);



var app = angular.module('myApp', []);

app.controller("myController", ['$scope', "$log", function($scope, $log) {
    $scope.$log = $log;
    $scope.message = "Print something to the log";
}]);

app.controller('myCtrl', function($scope) {
    $scope.showMe = false;
    $scope.hideFunc = function() {
        $scope.showMe= !$scope.showMe;
    };
});
app.controller('myCtrl2', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = !$scope.showMe;
    }
});

// app.controller('listCtrl', function($scope) {
//     $scope.myList = true;
//     $scope.toggle1 = function() {
//     $scope.myList = !$scope.myList;
//     };
// });




