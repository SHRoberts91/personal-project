angular.module('iDocsApp')
// .controller('iDocsCtrl', function($scope){
.controller('accountsCtrl', function(accountsService,$mdDialog){
    var self = this;
    self.accounts = [ ];
    self.selected = null;
    self.newAccount = [ ];
    self.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
    });
    self.numberOfDirectorsList= [0, 1, 2, 3, 4, 5]
    self.directorsNum= [ ];
    //HTTP CALL
    
    self.loadAllAccounts = accountsService.loadAllAccounts;
    self.loadAllAccounts()
    .then(function(response){
        // self.accounts    = [].concat(response);
        self.accounts = response;
        self.selected = self.accounts[0];
        console.log(self.accounts);
    });

    self.createAccount = accountsService.createAccount;

    //sideNav    
    self.toggleList = accountsService.toggleAccountsList;
    self.selectAccount = accountsService.selectAccount;
    
    
    //* Account Creation Modal    
    
    //director(s)
    self.loadDirectors = function(num){
        if(num === 0)return console.log("hit 0 directors");
        self.directorsNum[1].push({name:"",title:""})
        self.selected.unshift(num)
        console.log(self.questionData[1])
        console.log(self.selected)
        self.loadDirectors(num-1);
    }
    
    
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
    
     //** Show the bottom sheet
     
    self.makeContact = accountsService.makeContact;
    
    
    
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

