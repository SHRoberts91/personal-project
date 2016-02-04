angular.module('iDocs').service('iDocsService', function($http, $q, $firebaseArray, $firebaseObject){
    var fireBaseUrl = "https://iDocs9000.firebaseio.com/";
    this.getPostsArray = function(){
      var ref = new Firebase(fireBaseUrl + 'posts');
      return $firebaseArray(ref);
    };
});