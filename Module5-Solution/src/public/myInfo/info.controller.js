(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController)
.constant('ApiBasePath', "https://young-temple-30868.herokuapp.com/")

MyInfoController.$inject = ['item','ApiBasePath'];
function MyInfoController(item, ApiBasePath) {
  var infoctrl= this;
  infoctrl.menuItems = item;
  infoctrl.apiBase = ApiBasePath;
}

})();
