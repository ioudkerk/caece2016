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
    return {
        getStock: function(){
          var url=serverUrl+'api/Stocks';
          return $http.get(url);
        },
	getSucursales: function(){
	  var url=serverUrl+'api/Sucursals';
	  return $http.get(url);
	},
	getMarcas: function(){
	  var url=serverUrl+'api/Marcas';
	  return $http.get(url);
	},
	getProductos: function(){
	  var url=serverUrl+'api/Productoes';
	  return $http.get(url);
	},
	postStock: function(data){
	  var url=serverUrl+'api/Stocks';
	  return $http.post(url,data);
	},
    }

  };

})();
