angular.module('App', [])

  .controller("mainCtrl", mainController);

    function mainController() {
      console.log("hello controller");
      var main = this;

      this.showForm = function() {
        console.log("You Clicked show the form");
        var toggle = document.getElementById("name");
        console.log(toggle); 
        document.getElementById("name").setAttribute("ng-show","true");

      }
      
      this.submitForm = function() {
        var name = document.getElementById("name")[0].value;
        var name = document.getElementById("bio")[0].value;
        var name = document.getElementById("favs")[0].value;
        var name = document.getElementById("favjava")[0].value;
        console.log(name + ", " + bio + ", " + favs + ", " + favjava);
      }


    };

  
  

