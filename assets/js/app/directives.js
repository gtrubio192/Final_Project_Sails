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
          key: '='
        },
      
        link: function($scope, $element, $attrs){
          $scope.edit = function(){
              // show textarea, setting to true also hides div
              $scope.textShow = true;
              $scope.saveButton = true;
              console.log("Dynamic page: " + $scope.page);
  //                console.log("Dynamic: " + $scope.divContent[0].content)
          };
          $scope.save = function(){
            $scope.textShow = false;
            $scope.saveButton = false;

          };
          


        }
        
    }
});