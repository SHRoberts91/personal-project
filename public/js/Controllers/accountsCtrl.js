angular.module('iDocsApp')
// .controller('iDocsCtrl', function($scope){
    .controller('accountsCtrl', function (accountsService, $mdDialog) {
        var self = this;
        self.accounts = [];
        self.selected = null;
        self.newAccount = {};
        self.newAccount.directors = []
        self.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) {
                return { abbrev: state };
            });
        self.numOfDirectors = [0, 1, 2, 3, 4, 5]
        // self.directorsNum= [[] ];
        self.selectedDirectorAmount = [];
        //HTTP CALL
    
        self.loadAllAccounts = accountsService.loadAllAccounts;
        self.loadAllAccounts()
            .then(function (response) {
                // self.accounts    = [].concat(response);
                self.accounts = response;
                self.selected = self.accounts[0];
                // console.log(self.accounts);
            });

        self.createAccount = accountsService.createAccount;

        //sideNav    
        self.toggleList = accountsService.toggleAccountsList;
        self.selectAccount = accountsService.selectAccount;
    
    
        //* Account Creation Modal    
        self.accountCreation = accountsService.ShowAccountCreation;
    
        //state of formation
        self.pushStateOfFormation = function (state) {
            self.newAccount.stateOfFormation = state;
            console.log(self.newAccount)
        }
    
        //state
        self.pushState = function (state) {
            self.newAccount.state = state;
            console.log(self.newAccount);

        }
    
        //director(s)
        self.loadDirectors = function (num) {
            if (num === 0) return console.log("hit 0 directors");
            console.log(self.newAccount)
            self.newAccount.directors.push({ name: "", title: "" })
            console.log(self.directors);
            self.selectedDirectorAmount.unshift(num);
            self.loadDirectors(num - 1);
        }
    
        //create account
        self.createAccount = accountsService.createAccount;
    
        //random functions
    
        self.cancel = accountsService.cancel;
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

