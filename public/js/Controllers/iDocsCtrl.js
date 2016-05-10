
angular.module('iDocsApp')
// .controller('iDocsCtrl', function($scope){
.controller('iDocsCtrl', function($mdDialog, $mdMedia, meetingsService){    
    var self = this;
    self.htmlContentSecond;
        self.pushGeneraliDoc = meetingsService.createGeneraliDoc;
            

});

