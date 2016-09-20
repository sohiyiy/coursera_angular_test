(function () {
  'use strict';

  angular.module('myFirstApp',[])
  .controller('MyFirstController', function ($scope) {
    $scope.name = "Soham";
    $scope.sayHello = function () {
      return "Hello Soham !!";
    }
  });


})();
