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
    //$rootScope.estaLogueado=false;
    $rootScope.estaLogueado=false;
    var token = $location.search().token;
    //var token ="Hqy8bG_Yaw4yF4gx6GtXcrSFmsTgEOfV6OXRD5Wr2j27fjxY8vK76zxIxh4l4duvdjzdjrgPlPOWUfKUb16lmq28YP67QnvMwo-ZeA0_IpGjS2RTddrdn8C7tL0y1ncwCEiu7yvEygGDV9KtnvSsBDzRiDovcIqNw0aiVM0btj0_29wCeXO4RWeiP0XJ3JjkhX6t058uOAuk07YY2XQRO1s8xLVVk_c5NxShuwaGab-tsXJzyyI4xGbX_JC63QDmewh4H7aJdKpKMUX__dVgFpe32_GaauOYiO5ZypMi1ygN_cpjzwg99cRmlTZ9_v-16ZkwvAd-BT-1X4bXjjSMx2u1cLHLywOaIoz4Jyjd6LAhACmzApU20KMNXgT56FLf7-ZdE7MAv9VyX0cHVRUrPDydhS4DzMNjI5lVMFkBEKMevFvVry4qxxdMkithc8ftvpWyybBmKcEbpty60yQjT_hWg1Dh3zxo9t1Y9bkAuxjHeWI9tX6FuVsXak1JWUVh";          
    userIdentity.setToken(token);
    userIdentity.validar().then(
        function(data){            
            $rootScope.estaLogueado=true;
            //console.log(token);
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
