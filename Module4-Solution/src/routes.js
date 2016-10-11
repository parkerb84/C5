(function () {
  'use strict';

  angular.module('MenuApp', [])
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menu/templates/home.template.html'
    })

    .state('mainList', {
      url: '/main-list',
      templateUrl: 'src/menu/templates/main-categories.template.html',
      controller: 'MainMenuAppController',
      controllerAs: 'mainList',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('itemDetail', {
      url: '/main-list/{category}',
      templateUrl: 'src/menu/templates/items-list.template.html',
      controller: 'ItemsCategoryController',
      controllerAs: 'itemList',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService){
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    });
  }
})();
