// Glue

angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http, $interval,$timeout, SectionService) {
	$scope.test = 'You\'re Home';
  $scope.formShow = false;
  $scope.editButtons = false;
  SectionService.load('home').then(function(response){
    // need to sort when a new line is added to textbox
    $scope.temp = response.data;     
    $scope.sections = _.sortBy($scope.temp, 'id');
  });
  
// Talks to directives via 'editable' variable
  $scope.signIn = function(){
    console.log("Signing in");
    $scope.editButtons = true;
    console.log($scope.editButtons);
  };
  console.log($scope.caption);
  
//  $scope.post = PostService.post;
    
})
.controller('AboutCtrl', function($scope, $state, $http, SectionService) {
  $scope.test = 'About';

  $scope.formShow = false;
  SectionService.load('about').then(function(response){
    $scope.temp = response.data;
    $scope.sections = _.sortBy($scope.temp, 'id');  
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
    $scope.temp = response.data;     
    $scope.sections = _.sortBy($scope.temp, 'id');
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
