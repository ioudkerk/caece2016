/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.stock')
      .controller('StockPageCtrl', TablesPageCtrl);

  /** @ngInject */
  function TablesPageCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePageSize = 5;

    $scope.stocks = [
      {
        id:1,
        producto: 'Jean',
        marca: 'Polo',
        descripcion: 'una breve descripcion del producto',
        sucursal: 'avellaneda',
        cantidad: '500'
      },
      {
        id:2,
        producto: 'Camisa',
        marca: 'Polo',
        descripcion: 'una breve descripcion del producto',
        sucursal: 'avellaneda',
        cantidad: '30'
      },
      {
        id:3,
        producto: '',
        marca: '',
        descripcion: '',
        sucursal: '',
        cantidad: ''
      },
      {
        id:4,
        producto: '',
        marca: '',
        descripcion: '',
        sucursal: '',
        cantidad: ''
      },
      {
        id:5,
        producto: '',
        marca: '',
        descripcion: '',
        sucursal: '',
        cantidad: ''
      },
      {
        id:6,
        producto: '',
        marca: '',
        descripcion: '',
        sucursal: '',
        cantidad: ''
      },
    ]

    $scope.new_stocks=[];

    $scope.removeNewStock = function(index) {
      $scope.new_stocks.splice(index, 1);
    };

    $scope.addNewStock = function() {
      $scope.inserted = {
        id: $scope.stocks.length+1,
        producto: '',
        marca: '',
        descripcion:'',
        sucursal:'',
        cantidad:''
      };
      $scope.new_stocks.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
