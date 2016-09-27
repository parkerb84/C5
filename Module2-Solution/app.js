(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemBuy = this;

    itemBuy.items = ShoppingListCheckOffService.getItemBuy();

    itemBuy.moveItem = function (itemIndex) {
      ShoppingListCheckOffService.moveItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var itemBought = this;

    itemBought.items = ShoppingListCheckOffService.getItemBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      {name: "Ramen", quantity: 4},
      {name: "Cookies", quantity: 12},
      {name: "Doughnuts", quantity: 13},
      {name: "Miso", quantity: 1},
      {name: "Tofu", quantity: 2}
    ];

    var itemsBought = [];

    service.getItemBuy = function () {
      return itemsToBuy;
    };

    service.moveItem = function (itemIndex) {
      itemsBought.push({name: itemsToBuy[itemIndex].name, quantity: itemsToBuy[itemIndex].quantity});
      itemsToBuy.splice(itemIndex, 1);
    };

    service.getItemBought = function () {
      return itemsBought;
    };

  }

})();
