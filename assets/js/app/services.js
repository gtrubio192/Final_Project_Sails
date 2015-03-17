// Server calls

angular.module('app.services', [])
.service('SectionService', function($http){
    // page = home, about, etc
    this.load = function(page){
      var query = {
        page: page
      };
      console.log("Loading..." + page);
      $( ".move" ).draggable();

//          $http.get('/Box/' + $scope.id, 
//  THIS WORKS
//      return $http.get("/Box/?sort=createdAt DESC")
    return $http.get("/Box/?where=" + JSON.stringify(query)+"&?sort=updatedAt%20ASC")
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