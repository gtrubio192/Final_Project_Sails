// Glue

angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http, $interval,$timeout, SectionService, PostService) {
	$scope.test = 'You\'re Home';
  $scope.formShow = false;
  SectionService.load('home').then(function(response){
    $scope.sections = response.data;
  });
  
// MOVE TO DIRECTIVES. CURRENTLY NOT WORKING FROM THAT FILE...
  $scope.signIn = function(){
    console.log("Signing in");
//    $scope.user = prompt("UserName: ");
//    $scope.pass = prompt("Password: ");
    $scope.editButtons = true;
  };
  
// MOVE TO DIRECTIVES. CURRENTLY NOT WORKING FROM THAT FILE...
  console.log($scope.caption);
  
//  $scope.post = PostService.post;
    
})
.controller('AboutCtrl', function($scope, $state, $http, SectionService) {
  $scope.test = 'About';

  $scope.formShow = false;
  SectionService.load('about').then(function(response){
    $scope.sections = response.data;
  });
  
  $scope.postContent = function(page){
    console.log("Posting..." + page);
    console.log($scope.caption);
    $scope.textShow = false;
    $scope.saveButton = false;
    $scope.page = page
    $http.post('/Box/',{
      page: $scope.page,
      section: $scope.section,
      content: $scope.caption
    })
    .success(function(response){
      console.log("Dynamic put success: " )
      console.log(response);
    })
    .error(function(err){
      console.log(err);
    });
    $scope.caption = "";
    $scope.formShow = false;
    $scope.saveButton = false;
  };
})
.controller('BlogCtrl', function($scope) {
	$scope.test = 'Blogs';
})
.controller('PostCtrl', function($scope, $http, $state){
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
    })
    .error(function(err){
      console.log(err);
    });

    $scope.formShow = false;
    $scope.saveButton = false;
  };
});
