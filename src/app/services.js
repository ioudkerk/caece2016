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

        setStatusLogueado: function(s){ config.status.logueado = s },        
        
        setToken: function(t){ config.headers.Authorization = 'Bearer '+t },

        validar : function(){
          $http.defaults.headers.common['Authorization'] = config.headers.Authorization;
          var url=serverUrl+"api/Account/UserInfo";          
          return $http.get(url);
      }

    };

  }

  function stockWebService($http){
    var _stock=[
      {
        id: 10,
        producto: 'pantalon',
        marca: 'tuvie',
        descripcion:'aja',
        sucursal:'cabalito',
        cantidad:'3',
        vendiendo: 0,
        precio: 0
      }
    ]

    return {
        getStock: function(){
          var url=serverUrl+'api/Stocks';
          return $http.get(url);
        },
        test: function (){
          return _stock;
        }
    }
  };

})();