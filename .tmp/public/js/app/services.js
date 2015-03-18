// Server calls

angular.module('app.services', [])
.service('SectionService', function($http){
    // page = home, about, blog, etc
    this.load = function(page){
      var pageQuery = {
        page: page
      };

      console.log("Loading..." + page);
      $( ".move" ).draggable();

//          $http.get('/Box/' + $scope.id, 
//  THIS WORKS
//      return $http.get("/Box/?sort=createdAt DESC")
      return $http.get("/Box/?where=" + JSON.stringify(pageQuery)+"&?sort=id%20ASC")
      .success(function(response) {
        console.log("Load gets success");
        console.log(response);
      })
      .error(function(err){
          console.log(err);
      });
    } // end of load()
});