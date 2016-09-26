(function (){
  'use strict';

  angular.module('BlurAdmin.pages.stock')
      .controller('ModalStockCtrl', ModalStockCtrl);

  function ModalStockCtrl ($scope, items ){

    $scope.vendiendoItems=items;

  };

})();
