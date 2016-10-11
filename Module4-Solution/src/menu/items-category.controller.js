(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsCategoryController', ItemsCategoryController);

  ItemsCategoryController.Inject = ['items'];
  function ItemsCategoryController(items) {
    var itemList = this;
    itemList.items = items;
  }
})();
