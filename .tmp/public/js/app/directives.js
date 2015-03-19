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
      id: '=',
      editable: '=',
      position: '='
  },

  link: function($scope, $element, $attrs){
//    $( ".move" ).draggable();
//    $( ".move" ).draggable({ stack: ".move" }).sortable({
//      revert: true
//    });

    $scope.edit = function(){
      // show textarea, setting to true also hides div
      $scope.textShow = true;
      $scope.saveButton = true;
      console.log("Edit...");
      
      $( ".move" ).draggable({ stack: ".move" }); 
    };
    
    $scope.save = function(){
      $scope.textShow = false;
      $scope.saveButton = false;
      console.log("Saving...");
      var div1 = $( "#div1" );

      var position = div1.position();
      var left = position.left;
      var top = position.top;
      console.log("Position offset ");
      console.log(position);
      console.log("left");
      console.log(left);

      position.top += 'px';
      position.left += 'px';

      $http.put('/Box/' + $scope.id, {
        page: $scope.page,
        section: $scope.section.section,
        content: $scope.content,
        id: $scope.id,
        positionLeft: left,
        positionTop: top,
        position: JSON.stringify(position)
      })
      .success(function(response){
        console.log("Dynamic put success: " )
        console.log(response);
      })
      .error(function(err){
        console.log(err);
      });
    };
    
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