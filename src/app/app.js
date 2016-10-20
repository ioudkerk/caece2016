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
          var token = "vFT2CjMdWxUI3r0iCwkZLYxv9s1kvcy7a7_2BN7d7_9W9UGuc0UZ5U_Byis8_vLMD3ejbXh2E-XHD5t_dY7Lw0lw-lG20u0NoVICElfwrNl1F7427weaaYcs-9TTG695U-D-19mWeVnEQQTU1MTxlLojevNuXchG2EZkSr28WLp6Pa8s01zHhdyrSsDGhGQW-YyBQJ2BRneDZ4-WQrE32686dpDVD-zqgm1e_RYmvWhH96roLQgZVhoaISz5y5-tVa0_lUYq8R6lIqwoaVPvBKYIvMGz4K06fR-n3DHEcPCL7-Uld1sdOYoZWez0TtbGNVX2NJD36_nSkjDGyI_VzreaOH-QcGeG_Ssmh5oKk92F5IbregFzWb_a1uc_OaOIqx04yk0oXU_zYELExxuhMA4W9-3i3D54AkF9MorIFKoveYoVx4B0DJC7efFMtKssU33iO0SwbgsUusBhwPXrK-lC4uuBwIysRMgOmDHJ5man2pCT6YWr8ldSQTqaC3wh";
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
