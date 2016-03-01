var app = angular.module('iDocsApp', ['ui.router', 'ngMaterial', 'textAngular', 'ngAnimate']);
app.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('red', {
            'default': 'A700'
        })
        .accentPalette('purple')

    $stateProvider
        .state('tabs', {
            abstract: true,
            url: '/tabs',
            templateUrl: './routes/tabs.html',
            controller: function ($scope) {
                $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    $scope.currentTab = toState.data.selectedTab;
                });
            }
        })
        .state('tabs.accounts', {
            url: '/accounts',
            data: {
                'selectedTab': 0
            },
            views: {
                'accounts': {
                    templateUrl: './routes/tabs.accountsTmpl.html',
                    controller: 'accountsCtrl as al',
                    controllerAs: 'al'
                }
            }
        })
        .state('tabs.meetings', {
            url: '/meetings',
            data: {
                'selectedTab': 1
            },
            views: {
                'meetings': {
                    templateUrl: './routes/tabs.meetingsTmpl.html',
                    controller: 'meetingsCtrl',
                    controllerAs: 'mc',
                }
            }
        })
        .state('tabs.createiDoc', {
            url: '/createiDoc',
            data: {
                'selectedTab': 2
            },
            views: {
                'createiDoc': {
                    templateUrl: './routes/tabs.createiDocTmpl.html',
                    controller: 'iDocsCtrl',
                    controllerAs: 'idc'
                }
            }
        })
            
    //     .state('home', {
    //       templateUrl: './routes/homeTmpl.html',
    //       controller: 'iDocsCtrl',
    //       url: '/home'
    //     })
    // .state('login', {
    //     templateUrl: './routes/loginTmpl.html',
    //     controller: 'loginCtrl',
    //     controllerAs: 'login',
    //     url: '/login'
    // })
    // .state('iDocs', {
    //   templateUrl: './routes/iDocsTmpl.html',
    //   controller: 'iDocsCtrl',
    //   url: '/iDocs'
    // })
    $urlRouterProvider.otherwise('/tabs/accounts');
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
