angular.module('iDocsApp')
.controller('meetingsCtrl', function(meetingsService, accountsService){
    var self = this;
    self.questionData = [[], []]; //[0]-directors 
                               //[1]-other attende
                               //[2]-date of previous meeting
                               //[3]-date of this meeting
    self.generaliDocs = [ ];
    self.iDocsToUpdate = [ ]; 
    self.selected = [ ];
    self.accounts = [ ];
    self.extraAttendeesSelect = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    //AngularText    
    self.origContent = "testing text box";
    self.htmlContent = self.origContent;
    
    
    //HTTP CALLS
    self.loadAllGeneraliDocs = meetingsService.loadAllGeneraliDocs; 
    self.loadAllGeneraliDocs()
    .then(function(response){
        self.generaliDocs = response;
        // console.log(self.generaliDocs);
        
    });
    
    
    //Accounts
    self.loadAllAccounts = accountsService.loadAllAccounts;
    // self.selected = null;
    // self.selectAccount = accountsService.selectAccount;
    self.loadAllAccounts()
    .then(function(response){
        self.accounts = [].concat(response);
        self.accounts = response;
        // self.questionData = self.accounts[0];
        // console.log(self.accounts);
    })
    
    //questionnaire
    
    //**directors in attendance
    self.toggle = function (director, list) {
        console.log(list);
        var idx = list.indexOf(director);
        if (idx > -1) list.splice(idx, 1);
        else list.unshift(director);
        console.log(list);
    };
    self.exists = function (director, list) {
        return list.indexOf(director) > -1;
    };
    
    
    //**other participants
    
    self.loadAttendees = function(num){
        if(num === 0)return console.log("hit 0 attendees");
        self.questionData[1].push({name:"",title:""})
        self.selected.unshift(num)
        // console.log(self.questionData[1])
        // console.log(self.selected)
        self.loadAttendees(num-1);
    }    
    
    
    //**Date of previous meeting
    self.myDate = new Date();
    self.minDate = new Date(
        self.myDate.getFullYear()-3,
        self.myDate.getDate());
    self.maxDate = new Date();
    self.loadPreviousDate = function(myDate){
        self.questionData[2] = myDate;
        console.log(self.questionData[2]);
        // console.log(self.questionData);
    }
    
    //**iDocs
    self.useiDoc = function(iDoc){
        var idx = self.iDocsToUpdate.indexOf(iDoc);
        if (idx > -1) return;
        else self.iDocsToUpdate.push(iDoc);
        // console.log(self.iDocsToUpdate);               
    }
   
    //**starting Meeting

    self.startMeeting = function(){
        self.questionData[3] = new Date();
        // console.log(self.questionData);
        self.origContent = meetingsService.updateiDocs(self.iDocsToUpdate, 'DATE OF PRIOR MEETING', self.questionData[2]);
        // self.origContent += self.iDocsToUpdate[1].iDoc;
        self.htmlContent = self.origContent;
        // meetingsService.updateiDocs(self.iDocsToUpdate[0])
        console.log(self.origContent); 
    }
    self.newGeneraliDocName = '';
    self.pushGeneraliDoc = meetingsService.createGeneraliDoc;
    
    
    })
    
