angular.module('iDocsApp').service('meetingsService', function($http){
    this.loadAllGeneralForms = function(){
        return $http.get('/forms/general')
        .then(function(response){
            return response.data;
        }).catch(function(err){
            console.log('not working', err);
        })
    };
    this.createGeneralForm=function(){
        return $http.post('forms/general')
        .then(function(response){
            return response.data;
        }).catch(function(err){
            console.log('not working', err);
        })
    };
    this.updateGeneralForm=function(id){
        return $http.put('forms/general')
        .then(function(response){
            return response.data;
        }).catch(function(err){
            console.log('not working', err);
        })
    };
    this.deleteGeneralForm=function(id){
        return $http.delete('forms/general')
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