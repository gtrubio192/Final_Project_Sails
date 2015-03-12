// Server calls

angular.module('app.services', [])
.service('SectionService', function($http){
    
    this.load = function(page){
      var query = {
        page: page
      };
      console.log("Loading...");
      return $http.get("/Box?where=" + JSON.stringify(query))
      .success(function(response) {
        console.log(response);
//        return response;
      })
      .error(function(err){
          console.log(err);
      });
    }
});