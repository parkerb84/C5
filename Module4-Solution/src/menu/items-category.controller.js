(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsCategoryController', ItemsCategoryController);

  ItemsCategoryController.$inject = ['item'];
  function ItemsCategoryController(item) {
    var itemDetail = this;
    itemDetail.items = item;
  }
})();
