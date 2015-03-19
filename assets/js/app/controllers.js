// Glue

angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http, $interval,$timeout, SectionService) {
  $( ".move" ).draggable();
  $( ".move" ).draggable( "disable" );

  $scope.test = 'You\'re Home';
  $scope.formShow = false;
  $scope.editButtons = false;
  SectionService.load('home').then(function(response){
    // Need to set position of each div
//    $("#secondElementId").offset({ top: offset.top, left: offset.left})
    // need to sort when a new line is added to textbox
    $scope.sections = _.sortBy(response.data, 'id');
//    console.log("before json parse: ");
//    console.log(typeof $scope.sections[0].position);
//    $scope.sections[0].position = JSON.parse($scope.sections[0].position);
    for(var i = 0; i < $scope.sections.length; i++)
    {
      $scope.sections[i].position = JSON.parse($scope.sections[i].position);
      console.log("Sections and Response.data type: " + i);
      console.log($scope.sections[i].position);
    }


    
  });
  
// Talks to directives via 'editable' variable
  $scope.signIn = function(){
    console.log("Signing in");
    $scope.editButtons = true;
//    $( ".move" ).draggable({ stack: ".move" }).sortable({
//      revert: false
//    }); 
};
  console.log($scope.caption);
  
//  $scope.post = PostService.post;
    
})
.controller('AboutCtrl', function($scope, $state, $http, SectionService) {
  $scope.test = 'About';

  $scope.formShow = false;
  SectionService.load('about').then(function(response){
    $scope.sections = _.sortBy(response.data, 'id');  
  });
  
  $scope.signIn = function(){
    console.log("Signing in");
    $scope.editButtons = true;
    console.log($scope.editButtons);
  };
})
.controller('BlogCtrl', function($scope, SectionService) {
	$scope.test = 'Blogs';
  
  $scope.formShow = false;
  SectionService.load('blog').then(function(response){
    // need to sort when a new line is added to textbox
    $scope.sections = _.sortBy(response.data, 'id');
  });
  
// MOVE TO DIRECTIVES. CURRENTLY NOT WORKING FROM THAT FILE...
  $scope.signIn = function(){
    console.log("Signing in");
    $scope.editButtons = true;
  };
// MOVE TO DIRECTIVES. CURRENTLY NOT WORKING FROM THAT FILE...
  console.log($scope.caption);
})
.controller('PostCtrl', function($scope, $http, $state, SectionService){
  console.log("Post Control");
  $scope.postContent = function(){
    console.log("State ");
    console.log($state.current.name);
    
    $scope.textShow = false;
    $scope.saveButton = false;
    
    $http.post('/Box/',{
      page: $state.current.name,
      section: $scope.section,
      content: $scope.caption
    })
    .success(function(response){
      console.log("Dynamic post success: " )
      console.log(response);
//      SectionService.load($state.current.name);
      $state.reload()
    })
    .error(function(err){
      console.log(err);
    });

    $scope.formShow = false;
    $scope.saveButton = false;
  };
})
.controller("SignInCtrl", function($scope){
    $scope.signIn = function(){
    console.log("Signing in");
    $scope.editButtons = true;
    console.log($scope.editButtons);
  };
});
