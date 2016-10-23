(function () {
  'use strict';

  var serverUrl="http://192.168.0.50:53395/";        

 

  angular.module('BlurAdmin.services',[])      
      .factory('userIdentity', userIdentity)
      .factory('stockWebService', stockWebService);
  
  function userIdentity($http) {
      var config = {  
        status: {
          logueado: false,
        },
        headers: {
          Authorization: '',      
        }
      };
      
      return {
        logueado: function() {        
          return config.status.logueado;
        },
        
        setToken: function(t){ config.headers.Authorization = 'Bearer '+t },

        validar : function(){
          $http.defaults.headers.common['Authorization'] = config.headers.Authorization;
          var url=serverUrl+"api/Account/UserInfo";          
          return $http.get(url);
      }

    };

  }

  function stockWebService(){
    return {
        prueba: true,
    }
  };

})();