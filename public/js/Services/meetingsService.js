angular.module('iDocsApp').service('meetingsService', function ($http, $mdDialog) {
    
    //**HTTP CALLS
    this.loadAllGeneraliDocs = function () {
        return $http.get('/iDocs/general')
            .then(function (response) {
                console.log(response.data);
                return response.data;
            }).catch(function (err) {
                console.log('not working', err);
            })
    };
    this.createGeneraliDoc = function (iDocName, iDoc) {
        return $http.post('iDocs/general', {
            name: iDocName,
            iDoc: iDoc
        })
            .then(function (response) {
                $mdDialog.show(
                    $mdDialog.alert()
                    // .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('iDoc submitted!')
                        .textContent("we will create a custom questionnaire for your iDoc within 24 hours and alert you when it's ready. Because we care about your happiness.")
                        .ariaLabel('iDoc Creation Alert')
                        .ok('okay')
                        .targetEvent(ev)
                    )
                console.log('SENT!', response.data);
                return response.data;
            }).catch(function (err) {
                console.log('not working', err);
            })
    }
    this.updateGeneraliDoc = function (id) {
        return $http.put('iDocs/general')
            .then(function (response) {
                return response.data;
            }).catch(function (err) {
                console.log('not working', err);
            })
    };
    this.deleteGeneraliDoc = function (id) {
        return $http.delete('iDocs/general')
            .then(function (response) {
                return response.data;
            }).catch(function (err) {
                console.log('not working', err);
            })
    };

    //Meeting
    this.updateiDocs = function (docToUpdate, secToBeReplaced, secReplacing) {
        var regex = new RegExp(secToBeReplaced, 'g');
        // console.log(docToUpdate[0].iDoc.replace(regex, secToUpdate));
        return docToUpdate[0].iDoc.replace(regex, secReplacing);
    }


});

// app.post('/form/general', formCtrl.create)
// app.get('/form/general', formCtrl.read);
// app.put('/form/general/:id', formCtrl.update);
// app.delete('/form/general/:id', formCtrl.delete);
// app.post('/form/modified', formCtrl.createModified)
// app.get('/form/modified', formCtrl.readModified);
// app.put('/form/modified/:id', formCtrl.updateModified);
// app.delete('/form/modified/:id', formCtrl.deleteModified);