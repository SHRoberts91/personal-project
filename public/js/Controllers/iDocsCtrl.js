
angular.module('iDocsApp')
// .controller('iDocsCtrl', function($scope){
.controller('iDocsCtrl', function($mdBottomSheet, $mdSidenav, $scope){    
    // $scope.toggleList = toggleAccountsList;
    // $scope.selectAccount = selectAccount;
    // $scope.accounts = [ ];
    // $scope.selected = null;
    
    
    //**Load all registered accounts

    // accountService
    //       .loadAllAccounts()
    //       .then( function( accounts ) {
    //         self.accounts    = [].concat(account);
    //         self.selected = accounts[0];
    //       });
    
    //**Hide or Show left sideNav area
    // function toggleAccountsList() {
    //     $mdSidenav('left').toggle();
    // };
    
    //**Select the current account
    
    // function selectAccount (account){
    //     $scope.selected = account;
    // }
    
    
     //** Show the bottom sheet
     
    // function makeContact(selectedAccount) {
    //     var appRoot = 'https://rawgit.com/angular/material-start/es5-tutorial/app/';

    //     $mdBottomSheet.show({
    //       controllerAs     : "vm",
    //       controller       : [ '$mdBottomSheet', ContactSheetController],
    //       templateUrl      : appRoot + 'src/users/view/contactSheet.html',
    //       parent           : angular.element(document.getElementById('content'))
    //     });
    
    //** Bottom Sheet controller for the Avatar Actions
    
    //  function ContactSheetController( $mdBottomSheet ) {
    //    var rootURL = appRoot + "assets/svg/";

    //    this.user = selectedUser;
    //    this.items = [
    //      { name: 'Phone'       , icon: 'phone'       , icon_url: rootURL + 'phone.svg'},
    //      { name: 'Twitter'     , icon: 'twitter'     , icon_url: rootURL + 'twitter.svg'},
    //      { name: 'Google+'     , icon: 'google_plus' , icon_url: rootURL + 'google_plus.svg'},
    //      { name: 'Hangout'     , icon: 'hangouts'    , icon_url: rootURL + 'hangouts.svg'}
    //    ];
    //    this.contactUser = function(action) {
    //      // The actually contact process has not been implemented...
    //      // so just hide the bottomSheet

    //      $mdBottomSheet.hide(action);
    //    };
    //  }

});

