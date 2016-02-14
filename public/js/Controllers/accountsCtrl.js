angular.module('iDocsApp')
// .controller('iDocsCtrl', function($scope){
.controller('accountsCtrl', function(accountsService,$mdDialog){
    var self = this;
    
    self.toggleList = accountsService.toggleAccountsList;
    self.selectAccount = accountsService.selectAccount;
    self.accounts = [ ];
    self.selected = null;
    
    self.loadAllAccounts = accountsService.loadAllAccounts;
    // self.loadAllAccounts()
    // .then(function(response){
    //     // self.accounts    = [].concat(response);
    //     self.accounts = response;
    //     self.selected = self.accounts[0];
    //     console.log(self.accounts);
    // })
    
     //** Show the bottom sheet
     
    self.makeContact = accountsService.makeContact;
    
    //* Show Account Creation Modal    
    self.accountCreation = accountsService.ShowAccountCreation;
    self.cancel= accountsService.cancel;
    self.accountEdit = accountsService.accountEdit;
    
    // self.hide = function() {
    //     $mdDialog.hide();
    // };
    // self.cancel = function() {
    //     $mdDialog.cancel();
    // };
    // self.answer = function(answer) {
    //     $mdDialog.hide(answer);
    // }; 
    
    
    
    
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

