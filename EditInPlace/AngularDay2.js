angular.module('App', [])

.controller("mainCtrl", mainController);

function mainController() {
  console.log("hello controller");
  var main = this;

  main.monkeys = ['koko', 'casey', 'harambe', 'cheetah'];

  // return this - this happens indirectly, passing main

  main.monkeyObj = [
    { 
      'name':'koko',
      'biz':'eat',
      'food':'people' 
    },
    {
      'name':'casey',
      'biz':'ride bikes',
      'food':'greens'
    },
    {
      'name':'harambe',
      'biz':'save children',
      'food':'bananas'
    },
    {
      'name':'cheetah',
      'biz':'swing from vines',
      'food':'glue'
    }
  ]

}

