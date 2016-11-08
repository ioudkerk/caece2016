(function () {
  'use strict';

  // var serverUrl="http://localhost:53395/";        
  var serverUrl = 'http://stockapp.caece.edu:8080/';



  angular.module('BlurAdmin.services', [])
    .factory('userIdentity', userIdentity)
    .factory('stockWebService', stockWebService);

  function userIdentity ($http) {
    var config = {
      headers: {
        Authorization: ''
      }
    };

    return {
      setToken: function (t) {
        config.headers.Authorization = 'Bearer ' + t
        $http.defaults.headers.common['Authorization'] = config.headers.Authorization
      },

      validar: function () {
        var url = serverUrl + 'api/Account/UserInfo'
        return $http.get(url)
      }

    };
  };

  function stockWebService ($http) {
    $http.defaults.timeout = 300;
    return {
      getStock: function () {
        var url = serverUrl + 'api/Stocks';
        return $http.get(url);
      },
      getSucursales: function () {
        var url = serverUrl + 'api/Sucursals';
        return $http.get(url);
      },
      getMarcas: function () {
        var url = serverUrl + 'api/Marcas';
        return $http.get(url);
      },
      getProductos: function () {
        var url = serverUrl + 'api/Productoes';
        return $http.get(url);
      },
      postStock: function (data) {
        var url = serverUrl + 'api/Stocks';
        return $http.post(url, data);
      },
      delStock: function (data) {
        var url = serverUrl + 'api/Stocks?hash=' + data;
        return $http.delete(url);
      },
      putStock: function (data) {
        var url = serverUrl + 'api/Stocks?hash=' + data.hash;
        return $http.put(url, data);
      }
    };
  };
})();
