(function (){
  'use strict';

  angular.module('BlurAdmin.pages.stock')
      .controller('ModalStockCtrl', ModalStockCtrl);

  function ModalStockCtrl ($scope, items ){
   $scope.confirmarVenta = function () {
     var vendidos = [];
     angular.forEach(items, function(item){
        if (item.vendiendo >= 1){
          this.push(item)
        }
     }, vendidos );
     console.log(vendidos);
   };
  };
})();
