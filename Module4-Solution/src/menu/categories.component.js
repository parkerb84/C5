(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categoryTemplate', {
    templateUrl: 'src/menu/templates/categoryTemplate.html',
    bindings: {
      items: '<'
    }
  });

})();
