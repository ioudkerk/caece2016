/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.stock')
      .controller('StockPageCtrl', StockCtrl);


  /** @ngInject */
  function StockCtrl(stockWebService, $scope,$filter, $uibModal, editableOptions, editableThemes,$http) {            
    
    $scope.smartTablePageSize = 5;      
    $scope.stocks=[];    
    $scope.sucursalesTypeHead = [];
    $scope.marcasTypeHead = [];
    $scope.productosTypeHead = [];

    $scope.new_stocks=[];

// Carga de datos
    stockWebService.getStock().then( 
      function(response){
        angular.forEach(response.data, function(value, key){
          this.push(value);
        },$scope.stocks);
    });
                    

    stockWebService.getSucursales().then(
      function(response){
        $scope.sucursalesTypeHead=response.data;
      }
    );

    stockWebService.getMarcas().then(
      function(response){
        $scope.marcasTypeHead=response.data;
      }
    );

    stockWebService.getProductos().then(
      function(response){
        $scope.productosTypeHead=response.data;
      }
    );


// Fin carga de datos


    $scope.removeNewStock = function(index) {
      $scope.new_stocks.splice(index, 1);
    };
    $scope.removeStock = function(index) {
      $scope.stocks.splice(index, 1);
    };

    $scope.addNewStock = function() {
      $scope.inserted = {
        id: $scope.new_stocks.length+1,
        producto: '',
        marca: '',
        descripcion:'',
        sucursal:'',
        cantidad:'',
        vendiendo: 0,
        precio: 0
      };
      $scope.new_stocks.push($scope.inserted);
    };

    $scope.saveNewStock = function(){
      angular.forEach($scope.new_stocks, function(new_stock){
         new_stock.id=$scope.stocks.length+1;
         this.push(new_stock);
      },$scope.stocks);
      $scope.new_stocks=[];
    };

   $scope.addVenta = function (stock) {
      if (stock.cantidad > 0) {
        stock.vendiendo+=1;
        stock.cantidad-=1;
      }else{
        alert("No hay stock!");
      }
   

   };

   $scope.remVenta = function (stock) {
      if (stock.vendiendo > 0) {
        stock.vendiendo-=1;
        stock.cantidad+=1;
      }else{
        alert("No hay mas para quitar");
      }
   };

   $scope.generarVenta = function() {
     var vendidos = [];
     angular.forEach($scope.stocks, function(item){
        if (item.vendiendo >= 1){
          this.push(item)
        }
     }, vendidos );

    var ventasModal = $uibModal.open({
      animation: true,
      templateUrl: 'app/pages/stock/consulta_venta/ventaModal.html',
      size: 'lg',
      controller: 'ModalStockCtrl',
      controllerAs: '$ctrl',
      resolve: {
        items: function () {
          return vendidos;
        }
      }
    })
     ventasModal.result.then(function (vendidos) {
	angular.forEach(vendidos, function(vendido) {vendido.vendiendo=0});
     });
   };


    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
