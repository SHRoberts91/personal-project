var app = angular.module('iDocsApp', ['ui.router', 'ngMaterial']);
app.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
   .primaryPalette('brown')
   .accentPalette('red');
  
  $stateProvider
  .state('guestHome', {
    templateUrl: './routes/guestHomeTmpl.html',
    controller: 'iDocsCtrl',
    url: '/guestHome'
  })
    .state('home', {
      templateUrl: './routes/homeTmpl.html',
      controller: 'iDocsCtrl',
      url: '/home'
    })
    .state('accounts', {
      templateUrl: './routes/accountsTmpl.html',
      controller: 'iDocsCtrl',
      url: '/accounts'
    })
    .state('meetings', {
      templateUrl: './routes/meetingsTmpl.html',
      controller: 'iDocsCtrl',
      url: '/meetings'
    })
    .state('iDocs', {
      templateUrl: './routes/iDocsTmpl.html',
      controller: 'iDocsCtrl',
      url: '/iDocs'
    })
    $urlRouterProvider.otherwise('/accounts');
});
// angular.module('iDocsApp', ['ngMaterial', 'ui.router'])
// .config(function( $mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider ){
//     var rootURL = "https://rawgit.com/angular/material-start/es5-tutorial/app/";
//     $mdThemingProvider.theme('default')
//             .primaryPalette('brown')
//             .accentPalette('red');
//     $stateProvider
// //   .state('guestHome', {
// //     templateUrl: '/routes/homeTmpl.html',
// //     controller: 'iDocsCtrl',
// //     url: '/home'
// //   })
//     .state('home', {
//       templateUrl: '/routes/homeTmpl.html',
//       controller: 'iDocsCtrl',
//       url: '/home'
//     })
//     .state('accounts', {
//       templateUrl: '/routes/accountsTmpl.html',
//       controller: 'accountsCtrl',
//       url: '/accounts'
//     })
//     .state('meetings', {
//       templateUrl: '/routes/meetingsTmpl.html',
//       controller: 'meetingsCtrl',
//       url: '/meetings'
//     })
//     .state('iDocs', {
//       templateUrl: '/routes/iDocsTmpl.html',
//       controller: 'iDocsCtrl',
//       url: '/iDocs'
//     })
//     $urlRouterProvider.otherwise('/home');
            
//     });
