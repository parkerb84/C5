(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/menu/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menu/templates/main-categories.template.html',
      controller: 'MainMenuAppController',
      controllerAs: 'categories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{itemId}',
      templateUrl: 'src/menu/templates/items-list.template.html',
      controller: 'ItemsCategoryController',
      controllerAs: 'itemDetail',
      resolve: {
        item: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.itemId);
        }]
      }
    });
  }
})();
