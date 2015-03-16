// DOM manipulation

angular.module('app.directives', [])
.directive('dynamic', function($http){
    // this configures directive
  return {
    restrict: 'E',

    templateUrl: '/templates/dynamicDiv.html',
    scope: {
      content: '=',
      page: '=',
      key: '=',
      section: '=',
      id: '='
  },

  link: function($scope, $element, $attrs){
    $scope.edit = function(){
      // show textarea, setting to true also hides div
      $scope.textShow = true;
      $scope.saveButton = true;
      console.log("Edit...");
    };
    
    $scope.save = function(){
      $scope.textShow = false;
      $scope.saveButton = false;
      console.log("Saving...");
      $http.put('/Box/' + $scope.id, {
        page: $scope.page,
        section: $scope.section.section,
        content: $scope.content
      })
      .success(function(response){
        console.log("Dynamic put success: " )
        console.log(response);
      })
      .error(function(err){
        console.log(err);
      });
    };
    
//    $scope.postContent = function(){
//      console.log("Posting...");
//      console.log($scope.caption);
//      $scope.textShow = false;
//      $scope.saveButton = false;
//      $http.post('/Box/',{
//        page: $scope.page,
//        section: $scope.section.section,
//        content: $scope.caption
//      })
//      .success(function(response){
//        console.log("Dynamic put success: " )
//        console.log(response);
//      })
//      .error(function(err){
//        console.log(err);
//      });
//    };
    
    $scope.deletePost = function(){
      $scope.deleted = true;
      console.log("Deleting...");
      console.log($scope.id);
      var query = {
        id: $scope.id
      };
      
    console.log(query);
    
    $http.delete("/Box/" + $scope.id)
      .success(function(response) {
        console.log("Delete success");
        console.log(response);
//        return response;
      })
      .error(function(err){
          console.log(err);
      });
      
    };
  }
  }
});