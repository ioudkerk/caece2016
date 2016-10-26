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
    $rootScope.$on('$locationChangeStart', function(event) {        
        if ( ! userIdentity.logueado() ){          
          var token = $location.search().token;
          userIdentity.setToken(token);
          userIdentity.validar().then(
              function(data){      
                  userIdentity.setStatusLogueado(true);                  
                },
                function(){                    
                    window.location = "auth.html";
                }
          );
      }      
    }
)});
