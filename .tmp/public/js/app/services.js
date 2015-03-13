// Server calls

angular.module('app.services', [])
.service('SectionService', function($http){
    // page = home, about, etc
    this.load = function(page){
      var query = {
        page: page
      };
      console.log("Loading...");
//      return $http.get("/Box?where=" + JSON.stringify(query))
      return $http.get("/Box")
      .success(function(response) {
        console.log("Load gets success");
        console.log(response);
//        return response;
      })
      .error(function(err){
          console.log(err);
      });
    }
});