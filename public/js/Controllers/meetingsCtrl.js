angular.module('iDocsApp')
.controller('meetingsCtrl', function(meetingsService, accountsService){
    var self = this;
    self.generaliDoc = [ ];
    self.attendees = [[], []];
    self.extraAttendeesSelect = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    self.selected = [ ];
    self.accounts = [ ];
    self.generaliDocs = [ ];
    self.iDocsToUpdate = [ ]; 
    
    
    //HTTP CALLS
    self.loadAllGeneraliDocs = meetingsService.loadAllGeneraliDocs; 
    self.loadAllGeneraliDocs()
    .then(function(response){
        self.generaliDocs = response;
        // console.log(self.generaliDocs);
        
    });
    
    //AngularText    
    self.origContent = '<h2>Testing Content!</h2>';
    self.htmlContent = self.origContent;
    
    
    //Accounts
    self.loadAllAccounts = accountsService.loadAllAccounts;
    // self.selected = null;
    // self.selectAccount = accountsService.selectAccount;
    self.loadAllAccounts()
    .then(function(response){
        self.accounts = [].concat(response);
        self.accounts = response;
        // self.attendees = self.accounts[0];
        // console.log(self.accounts);
    })
    
    //questionnaire
    
    //**directors in attendance
    self.toggle = function (attendee, list) {
        console.log(list);
        var idx = list.indexOf(attendee);
        if (idx > -1) list.splice(idx, 1);
        else list.unshift(attendee);
        console.log(list);
    };
    self.exists = function (attendee, list) {
        return list.indexOf(attendee) > -1;
    };
    
    
    //**other participants
    
    self.loadAttendees = function(num){
        if(num === 0)return console.log("hit 0 attendees");
        self.attendees[1].push({name:"",title:""})
        self.selected.unshift(num)
        // console.log(self.attendees[1])
        // console.log(self.selected)
        self.loadAttendees(num-1);
    }    
    
    
    //**Date of previous meeting
    self.myDate = new Date();
    self.minDate = new Date(
        self.myDate.getFullYear()-3,
        self.myDate.getDate());
    self.maxDate = new Date();
    self.loadPreviousDate = function(){
        self.attendees[2] = self.myDate;
        // console.log(self.attendees[2]);
        // console.log(self.attendees);
    }
    
    //**iDocs
    self.useiDoc = function(iDoc){
        var idx = self.iDocsToUpdate.indexOf(iDoc);
        if (idx > -1) return;
        else self.iDocsToUpdate.push(iDoc);               
    }
   
    // self.iDocToggle= function(iDoc){
    //     var idx = self.iDocsToUpdate.indexOf(iDoc);
    //     if (idx > -1) self.iDocsToUpdate.splice(idx, 1);
    //     else list.unshift(iDoc);
    // }
    
    
    })
    
