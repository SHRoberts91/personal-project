angular.module('iDocsApp').service('accountsService', function($http, $q, $mdSidenav, $mdBottomSheet, $mdDialog){
    //**Hide or Show left sideNav area
    this.toggleAccountsList = function() {
        $mdSidenav('left').toggle();
        console.log('list toggled');
    };
    
    this.selectAccount = function ( account ) {
       this.selected =  account;     
    };
    
    this.loadAllAccounts = function() {
        return $http({
            method: 'GET',
            url: '/account',  
        }).then(function(response){
            // console.log(response.data);
            return response.data;  
        }).catch(function(err){
            console.log('not working', err);
        })
    };
    this.makeContact = function(selectedAccount) {
        $mdBottomSheet.show({
            controller: 'accountsCtrl',
            controllerAs: 'al',
            template: `<md-bottom-sheet class="md-list md-has-header">
    <md-subheader>
        Contact <span class="name">{{ al.selected.companyName }}</span>:
    </md-subheader>
    <md-list>
      <md-list-item ng-repeat="a in al">
        <md-button ng-click="al.contactAccount(a)">
            {{a.director}}
        </md-button>
      </md-list-item>
    </md-list>
    </md-bottom-sheet>`,
            // parent: "angular.element(document.getElementById('content'))"
        });    
    };
  
    this.ShowAccountCreation = function(ev) {
        // var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))
        $mdDialog.show({
            controller: 'accountsCtrl',
            controllerAs: 'al',
            templateUrl: './../routes/accountCreationTmpl.html',
            // parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            // fullscreen: useFullScreen
            openFrom: {
               left: 1500,
            },
            // closeTo: {
            //     left: '1500'
            // }         
        })
        console.log('Account creation worked!');
        // this.hide = function() {
        //     $mdDialog.hide();
        // };
        // this.cancel = function() {
        //     $mdDialog.cancel();
        // };
    };
    
    this.accountEdit = function(selectedAccount) {
        // var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))
        $mdDialog.show({
            controller: 'accountsCtrl',
            controllerAs: 'al',
            templateUrl: './../routes/accountEditTmpl.html',
            // parent: angular.element(document.body),
            targetEvent: selectedAccount,
            clickOutsideToClose:true,
            // fullscreen: useFullScreen
            openFrom: {
               left: 1500,
            },
            // closeTo: {
            //     left: '1500'
            // }         
        })
        console.log('Account edit worked!');
        // this.hide = function() {
        //     $mdDialog.hide();
        // };
        // this.cancel = function() {
        //     $mdDialog.cancel();
        // };
    };

});

