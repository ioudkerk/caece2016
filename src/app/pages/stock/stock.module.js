/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.stock',[])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('stock', {
          url: '/stock',
          template : '<ui-view></ui-view>',
          abstract: true,
          controller: 'StockPageCtrl',
          title: 'Stock',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          }
        }).state('stock.alta', {
          url: '/AltaStock',
          templateUrl: 'app/pages/stock/main/alta.html',
          title: 'Administrar Stock',
          sidebarMeta: {
            order: 0,
          },
        }).state('stock.consultaventastock', {
          url: '/ConsultaVentaStock',
          templateUrl: 'app/pages/stock/main/consulta_venta.html',
          title: 'Consulta y Venta',
          sidebarMeta: {
            order: 100,
          },
        });

    $urlRouterProvider.when('/stock','/stock/AltaStock');
    
  }

})();
