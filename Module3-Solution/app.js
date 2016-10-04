(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&',
        error: '<'
      }
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.shortName = "";
    menu.error = "";

    menu.getMatchedMenuItems = function (searchTerm) {
      if (searchTerm === "" || searchTerm === undefined) {
        menu.error = "Nothing found!";
      }
      else {
        menu.error = "";
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
        promise.then(function (response) {
          menu.found = [];
          menu.found = response;

          if (menu.found.length === 0) {
            menu.error = "Nothing found!";
          }
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
        });
      }
    }
    menu.removeItem = function(itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    }
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    var menuItems = [];
    var matchedItems = [];

    service.getMatchedMenuItems = function (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      matchedItems = [];
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        menuItems = result.data;
        menuItems = menuItems.menu_items;
        for(var i = 0; i <= menuItems.length-1; i++){
          var item = menuItems[i].description;
          if (item.toLowerCase().indexOf(searchTerm) !== -1 ){
            matchedItems.push(menuItems[i]);
          }
        }
        return matchedItems;
      });
    }

    service.removeItem = function(itemIndex) {
      matchedItems.splice(itemIndex, 1);
    };
  }
})();
