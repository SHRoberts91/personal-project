angular.module('iDocsApp').service('meetingsService', function($http){
    this.loadAllGeneraliDocs = function(){
        return $http.get('/iDocs/general')
        .then(function(response){
            return response.data;
        }).catch(function(err){
            console.log('not working', err);
        })
    };
    this.createGeneraliDoc=function(){
        return $http.post('iDocs/general')
        .then(function(response){
            return response.data;
        }).catch(function(err){
            console.log('not working', err);
        })
    }
    this.updateGeneraliDoc=function(id){
        return $http.put('iDocs/general')
        .then(function(response){
            return response.data;
        }).catch(function(err){
            console.log('not working', err);
        })
    };
    this.deleteGeneraliDoc=function(id){
        return $http.delete('iDocs/general')
        .then(function(response){
            return response.data;
        }).catch(function(err){
            console.log('not working', err);
        })
    };


});

// app.post('/form/general', formCtrl.create)
// app.get('/form/general', formCtrl.read);
// app.put('/form/general/:id', formCtrl.update);
// app.delete('/form/general/:id', formCtrl.delete);
// app.post('/form/modified', formCtrl.createModified)
// app.get('/form/modified', formCtrl.readModified);
// app.put('/form/modified/:id', formCtrl.updateModified);
// app.delete('/form/modified/:id', formCtrl.deleteModified);