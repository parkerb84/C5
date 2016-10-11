(function () {
  'use strict';

  angular.module('data')
  .component('categories', {
    templateUrl: 'src/menu/templates/category.template.html',
    bindings: {
      category: '<'
    }
  });

})();
