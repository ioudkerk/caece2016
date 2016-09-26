(function (){
  'use strict';

  angular.module('BlurAdmin.pages.stock')
      .controller('ModalStockCtrl', ModalStockCtrl);

  function ModalStockCtrl ($uibModalInstance, items ){
    var $ctrl = this;
    $ctrl.vendiendoItems=items;

  };

})();
