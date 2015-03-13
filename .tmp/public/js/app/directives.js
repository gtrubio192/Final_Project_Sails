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
      console.log("Dynamic page: " + $scope.page);
    };
    $scope.save = function(){
      $scope.textShow = false;
      $scope.saveButton = false;

    };
    $scope.deletePost = function(){
      console.log("Deleting...");
      console.log($scope.id);
      var query = {
        id: $scope.id
      };
      
      console.log(query);
    
    $http.delete("/Box/id/5")
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