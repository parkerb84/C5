(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope) {
    $scope.muchMsg = "";
    $scope.foodList = "";
    $scope.checkFood = function () {
      var count = $scope.foodList.split(',').length;
      if ($scope.foodList == "") {
        $scope.muchMsg = "Please Enter Data First";
      }
      else if (count <= 3) {
        $scope.muchMsg = "Enjoy!";
      }
      else {
        $scope.muchMsg = "Too Much!";
      }
    };
  }

})();
