(function () {
  'use strict';

  angular.module('MenuApp')
  .component('itemTemplate', {
    templateUrl: 'src/menu/templates/itemTemplate.html',
    bindings: {
      items: '<'
    }
  });

})();
