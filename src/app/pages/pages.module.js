/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict'

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.stock',
  ])

    /** @ngInject */

  .config(routeConfig);

  function routeConfig ($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('logout', {
        url: '/logout',
        controller: function () {
          localStorage.clear()
          window.location = 'auth.html';
        }
      });
    $urlRouterProvider.otherwise('/dashboard');
  }
})();
