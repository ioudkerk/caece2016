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
          //var token = "SnbHkqujCeN0GJAKarfKhRTSFJOSn2sTEMLeOb77Q3j7x5UgWVZbmG5p9-ueshS3Etj5mc_LvgBGIjmXU8eK0apXPhePYNMzVabLkB9HsBZb2ogiyT3e1MapEJS5KhiVTLusPqSaHAavKhBYtTisKElOXpgeDsnTVtHlax3eLJGrm1tVr63CwhuMGMyt_i1g7iaBmLl-bGsgolmim5b9mt7TAHgqzWD39Sb82yY10kWECGKgzTHqqlG6jX5ugb-J_C0cIH2mjFDha0g-NMv_OAfD1b8BYuI2XpmT3FxzcjiKc9NsPjhVsiPLPd-OkWbm6Hf6qx80-hGx2gvGCtSmH4d_QF57Gr2scHUiavFsDZM6Md_mJlvqZ1fuq1Zsp9_6476_TbmPVBeidfv2ZvuaKVEsLf7KnIbfN4hll_86uuNolqNufCBNO02kb0kYw0jB2eMwCrm9iRRkaeDx8AmN-eINLCMDyfke-s3OTE_Q8di0DKQggVXRxjNkaICanb5S";
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
