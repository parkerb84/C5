(function () {
  'use strict';

  angular.module('data')
  .component('items', {
    templateUrl: 'src/menu/templates/item-template.html',
    bindings: {
      item: '<'
    }
  });

})();
