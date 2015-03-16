// Server calls

angular.module('app.services', [])
.service('SectionService', function($http){
    // page = home, about, etc
    this.load = function(page){
      var query = {
        page: page
      };
      console.log("Loading..." + page);
//          $http.get('/Box/' + $scope.id, 
//  THIS WORKS
//      return $http.get("/Box/?sort=createdAt DESC")
    return $http.get("/Box?where=" + JSON.stringify(query))
      .success(function(response) {
        console.log("Load gets success");
        console.log(response);
//        return response;
      })
      .error(function(err){
          console.log(err);
      });
    }
})
.service('PostService', function($http){
  this.post = function(caption,page){
    console.log("Posting..." + page);
    console.log($scope.caption);
    $scope.textShow = false;
    $scope.saveButton = false;
    $scope.page = page
    
    $scope.formShow = false;
    $scope.saveButton = false;
    
    return $http.post('/Box/',{
      page: page,
      section: $scope.section,
      content: $scope.caption
    })
    .success(function(response){
      console.log("Dynamic post success: " )
      console.log(response);
    })
    .error(function(err){
      console.log(err);
    });
    
  }
});