(function () {
  'use strict';

  angular.module('BlurAdmin.services',[])
      .factory('userIdentity', userIdentity);

  /** @ngInject */
  function userIdentity() {
    var token2;
    return {
      logueado: false,
      token: function(token){ this.token = token },
      validar: function(){
          return this.token == "hola";
        }
      }
    };

})();