angular.module('iDocsApp').service('iDocsService', function($http, $q, $mdSidenav){
    this.getUser = function(user){
        return $http({
            method: 'GET',
            url: '/user/read/:id',
            data: user
        }).then(function(response){
            console.log(response.data)
            return response.data;
        })
    }
});