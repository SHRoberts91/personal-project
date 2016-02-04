var app = angular.module('iDocsApp', ['ui.router', 'ngAnimate']);
app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('guestHome', {
    templateUrl: '/routes/homeTmpl.html',
    controller: 'guestHomeCtrl',
    url: '/home'
  })
    .state('home', {
      templateUrl: '/routes/homeTmpl.html',
      controller: 'homeCtrl',
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
    $urlRouterProvider.otherwise('/guestHome');
});