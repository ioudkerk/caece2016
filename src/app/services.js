(function () {
  'use strict';

  angular.module('BlurAdmin.services',[])
      .factory('userIdentity', userIdentity);

  /** @ngInject */
  function userIdentity() {
    return {
      logueado: false,
      }
    };

})();

