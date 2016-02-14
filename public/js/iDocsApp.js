var app = angular.module('iDocsApp', ['ui.router', 'ngMaterial', 'textAngular']);
app.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
   .primaryPalette('purple')
   .accentPalette('green');
  
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
      controller: 'accountsCtrl',
    //   controllerAs: 'al',
      url: '/accounts'
    })
    .state('meetings', {
      templateUrl: './routes/meetingsTmpl.html',
      controller: 'meetingsCtrl',
      controllerAs: 'mc',
      url: '/meetings'
    })
    .state('login', {
        templateUrl: './routes/loginTmpl.html',
        controller: 'loginCtrl',
        controllerAs: 'login',
        url: '/login'
    })
    .state('iDocs', {
      templateUrl: './routes/iDocsTmpl.html',
      controller: 'iDocsCtrl',
      url: '/iDocs'
    })
    $urlRouterProvider.otherwise('/meetings');
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
