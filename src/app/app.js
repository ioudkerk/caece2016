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
          //var token = $location.search().token;
          var token = "GfQtdIRieay5DKkw4gzoFvqjKnjnSNLi6Sl-ohCBjnV8TSpfOhalFpmuxIHsfQz9WyqAvBUovlmOcepFAQ3DNpocCTk4g1TTVBajuFMt82ZRvUA0nYAd8wrfSEEqgmrwRMGfUOBPm0BgYJPZLm_4IMFSTOROoLnPB0vO-I8C_esJZK3RAXH3exIP-c0KJgRk-tmi2DhcXCfip7hxkLgkp6Lph6lk_rfXWyaa4klQWltRkcyYb-5hbwgFgjSn4VY_GqZ8KH--Hr05ODtnktkvp0706zKjqAgq338x0gxj0TBVSAkPNmaxACPHjcDr4kLoMmUbKwW6IzRqYyhxhVP1i0Tp1DnHberAsTUCc1XC0lQTadhlQe186xKgjG-YT4X6WYBMk2wCRCNWQZMQTu-oUjC7HTZ357Eyp92HtaNYnkdvjNj6QmsHnRlfCTs-19ggZ_wPC2_X2dihLap6LlV1g6whM7eLCBsxSboo7PRDZqI";
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