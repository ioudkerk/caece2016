'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  'BlurAdmin.theme',
  'BlurAdmin.pages',
  'BlurAdmin.services'  
])

.run(function($rootScope,$location,userIdentity){
        
    $rootScope.estaLogueado=false;
    var token = localStorage.getItem('token'); 
    if ( token !== null ){
        $rootScope.estaLogueado=true;
        userIdentity.setToken(token);
	console.log(token)
    } else {
        token = $location.search().token;
        userIdentity.setToken(token);
        userIdentity.validar().then(
            function(data){
                localStorage.setItem('token',token);
                $rootScope.estaLogueado=true;
            },
            function(){
                window.location = "auth.html";
           }
       );
   }
});
