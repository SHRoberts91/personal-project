angular.module('iDocsApp')
.controller('meetingsCtrl', function(meetingsService, $scope){
    var self = this;
    self.generalForms = [ ];
    self.selected = null;
    
    //HTTP CALLS
    self.loadAllGeneralForm = meetingsService.loadAllGeneralForms; 
    self.loadAllGeneralForm()
    .then(function(response){
        console.log(response);
        self.generalForm = response;
    });
    
    //AngularText    
    self.origContent = '<h2>Testing Content!</h2>';
    self.htmlContent = self.origContent;
    
    
    
})

