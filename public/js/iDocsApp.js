// var app = angular.module('iDocsApp', ['ui.router', 'ngAnimate']);
// app.config(function ($stateProvider, $urlRouterProvider) {
//   $stateProvider
//   .state('guestHome', {
//     templateUrl: '/routes/homeTmpl.html',
//     controller: 'guestHomeCtrl',
//     url: '/home'
//   })
//     .state('home', {
//       templateUrl: '/routes/homeTmpl.html',
//       controller: 'homeCtrl',
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
//     $urlRouterProvider.otherwise('/guestHome');
// });

angular.module('iDocsApp', ['ngMaterial', 'accounts', 'ui.router'])
.config(function( $mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider ){
    var rootURL = "https://rawgit.com/angular/material-start/es5-tutorial/app/";

        // Register the account `avatar` icons
    $mdIconProvider
            .defaultIconSet(rootURL + "assets/svg/avatars.svg", 128)
            .icon("share"      , rootURL + "assets/svg/share.svg"       , 24)
            .icon("menu"       , rootURL + "assets/svg/menu.svg"        , 24)
            .icon("google_plus", rootURL + "assets/svg/google_plus.svg" , 512)
            .icon("hangouts"   , rootURL + "assets/svg/hangouts.svg"    , 512)
            .icon("twitter"    , rootURL + "assets/svg/twitter.svg"     , 512)
            .icon("phone"      , rootURL + "assets/svg/phone.svg"       , 512);

    $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    $stateProvider
//   .state('guestHome', {
//     templateUrl: '/routes/homeTmpl.html',
//     controller: 'iDocsCtrl',
//     url: '/home'
//   })
    .state('home', {
      templateUrl: '/routes/homeTmpl.html',
      controller: 'iDocsCtrl',
      url: '/home'
    })
    .state('accounts', {
      templateUrl: '/routes/accountsTmpl.html',
      controller: 'accountsCtrl',
      url: '/accounts'
    })
    .state('meetings', {
      templateUrl: '/routes/meetingsTmpl.html',
      controller: 'meetingsCtrl',
      url: '/meetings'
    })
    .state('iDocs', {
      templateUrl: '/routes/iDocsTmpl.html',
      controller: 'iDocsCtrl',
      url: '/iDocs'
    })
    $urlRouterProvider.otherwise('/home');
            
    });