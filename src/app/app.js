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
         // var token = $location.search().token;
          var token = "hnSSI59_qgw_GqV9BBp2luNvKZVFHS7evxa_pJai1QwcpCgUugvwGyc7x0o9dAjFIkHaYEeGdRf6INgS-MNwuRyu-FYUg_vxxmD74qwvueYxJsVg0FlQIk9WsX6X9-CrZag-5aCJ3rUna4CmjsEAdVL5uVCQnw6EhIef9Rkqo1-FTHr4LA_z1JExXY1jqmq-I-WUEsYoklDJnmQwFRBObZwPsfQf_l5Ps0KyQxoOTw_Inu8odFj1XNuVuNrMKA-mwCd7EDHPcICLw4Ij1XQGkVDOIKByZymO7nNUXQOX6Uht3v8R8CGEH6blnAbTGa2Ldx2dnG2A6aY61d3Uxg-xJhuUIORPndGetKKoebMlhLKyAFjnVc0CAV69_rXyMpZuunKKuo7ffZjyeKHn5O6xYLpUuDWq4TfVEEfuyhcbzwZHdgTyjGiBMeFtjnOg19E_JwVglQdVxZkMMudd-AqJE8Fp20MFkojw3bqJMmd349h0sVixAIgR4uvYlY2o7Tet";
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
