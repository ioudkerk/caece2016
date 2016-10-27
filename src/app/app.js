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
  'BlurAdmin.services',
])

.run(function($rootScope,$location,userIdentity){
    $rootScope.estaLogueado=false;
    var token = $location.search().token;          
    userIdentity.setToken(token);
    userIdentity.validar().then(
        function(data){
            userIdentity.setStatusLogueado(true);                  
            $rootScope.estaLogueado=true;
        },
        function(){
            window.location = "auth.html";                    
        }
    );
    // $rootScope.$on('$locationChangeStart', function(event) {
    //     console.log("uno");        
    //     if ( ! userIdentity.logueado() ){
    //       console.log("dos");          
    //       var token = $location.search().token;
    //       console.log(token);          
    //       userIdentity.setToken(token);                    
    //       userIdentity.validar().then(
    //           function(data){      
    //               console.log("tres");
    //               userIdentity.setStatusLogueado(true);                  
    //               console.log("logueado");
    //             },
    //             function(){                    
    //                 console.log("arafue");
    //                 window.location = "auth.html";                    
    //             }
    //       );
    //       console.log("cuatro");
    //   }     
    //   console.log("cinco");
    // });
});
