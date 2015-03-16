// Glue

angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http, $interval,$timeout, SectionService) {
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
  
  $scope.postContent = function(){
    console.log("Posting...");
    console.log($scope.caption);
    $scope.textShow = false;
    $scope.saveButton = false;
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
  
// MOVE TO DIRECTIVES. CURRENTLY NOT WORKING FROM THAT FILE...
  
    
})
.controller('AboutCtrl', function($scope, $state, $http) {
	$scope.test = 'About';
  $scope.textShow = false;
  $scope.saveButton = false;
  $scope.divContent = [ { id:'',content: "" } ];
  $scope.divContent1 = [ { id:'',content: "" } ];

//    console.log("Original: " + $scope.divContent[0].content);
    
  $scope.render = function(){
    console.log("Top of render(): " + $scope.divContent[0].content)
    // if we have changed and added content...
    if($scope.divContent[0].content == "" || $scope.divContent[0].content)
    {
      console.log("Possible error here");
//      $http.get('/Box?=/about&section=header')
//      .success(function(response) {
//          $scope.headResponseLen = response.length;
//          // if we have changed and added content...
//          if(response[$scope.headResponseLen-1].section == 'header')
//          {
//              console.log("we have a header");
//              $scope.divContent[0].content = response[$scope.headResponseLen-1].content; 
//          }
//
//      })
//      .error(function(err){
//          console.log(err);
//      });
//
//      $http.get('/Box?=/about&section=div1')
//      .success(function(response) {
//          console.log("In Div 1 Success Render().");
//          console.log("Div1 Response whole:");
//          console.log(response);
//          $scope.div1ResponseLen = response.length;
//
//          console.log(response[$scope.div1ResponseLen-1].section);
//
//          if(response[$scope.div1ResponseLen-1].section == 'div1')
//          {
//              console.log("We have a div1");
//              $scope.divContent1[0].content = response[$scope.div1ResponseLen-1].content; 
//          }
//      })
//      .error(function(err){
//          console.log(err);
//      });
    }

  };

  $scope.render();

  $scope.edit = function(){
    // show textarea, setting to true also hides div
    $scope.textShow = true;
    $scope.saveButton = true;
    console.log("In edit() divContent: " + $scope.divContent[0].content)
  };

  $scope.save = function(section,page){
    $scope.textShow = false;
    $scope.saveButton = false;
    if(section == 'header')
    {
        console.log("Changes to header posted in save()");
        console.log($scope.divContent[0].content);
//        $http.post('/Box', 
//               { page: page,
//                 section: section,
//                 content: $scope.divContent[0].content
//        })
//        .success(function(response){
//          console.log("Static post success: " )
//          console.log(response);
//        })
//        .error(function(err){
//          console.log(err);
//        });
    }
    else if(section == 'div1')
    {
      console.log("Changes to div1 posted in save()");
      console.log($scope.divContent[0].content);
//      $http.post('/Box', { 
//        page: page,
//        section: section,
//        content: $scope.divContent1[0].content
//      })
//      .error(function(err){
//        console.log(err);
//      });
    }
  };
})
.controller('BlogCtrl', function($scope) {
	$scope.test = 'Blogs';
});
//.directive('dynamic', function($http){
//    // this configures directive
//    return {
//        restrict: 'E',
//        
//        templateUrl: '/templates/dynamicDiv.html',
//        scope: {
//          content: '=',
//          page: '=',
//          key: '='
//        },
//        link: function($scope, $element, $attrs){
//            $scope.edit = function(){
//                // show textarea, setting to true also hides div
//                $scope.textShow = true;
//                $scope.saveButton = true;
//                console.log("Dynamic stuff: " + $scope.page);
////                console.log("Dynamic: " + $scope.divContent[0].content)
//            };
//            $scope.save = function(){
//                console.log("Directive save clicked" + $scope.content +"  " + $scope.key + "   " + $scope.page);
//                $scope.textShow = false;
//                $scope.saveButton = false;
//
//                $http.post('/Box', 
//                   { page: $scope.page,
//                     key: $scope.key,
//                     content: $scope.content
//                   });
//   
//            }
//        }
//        
//    }
//});