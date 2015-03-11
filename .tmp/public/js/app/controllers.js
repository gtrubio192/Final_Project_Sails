angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http, $interval,$timeout) {
	$scope.test = 'You\'re Home';
    $scope.textShow = false;
    $scope.saveButton = false;
    $scope.divContent = [ { id:'',content: "" } ];
//    console.log("Original: " + $scope.divContent[0].content);
    
    $scope.render = function(){
//        $scope.divContent = [ { id:'',content: "" } ];
        console.log("Top of render(): " + $scope.divContent[0].content)
        // if we have changed and added content...
        if($scope.divContent[0].content == "" || $scope.divContent[0].content)
        {
            $http.get('/Box?=/home')
            .success(function(response) {
                console.log("In Success Render().");
                console.log("Response[0].content ");
                console.log(response[0].content);
                console.log("Response whole:");
                console.log(response);
                console.log("divContent: " + $scope.divContent[0].content);
                $scope.responseLen = response.length;
                console.log($scope.responseLen);
                // if we have changed and added content...
//                if(response[0].content == $scope.divContent[0].content){
//                    console.log("Inside Success if, do nothing. divContent is: ");
//                    console.log($scope.divContent[0].content);
//                }
//                // else content is empty string... 
//                else{
                    $scope.divContent[0].content = response[$scope.responseLen-1].content; 
//                    console.log("Newest divContent: " + $scope.divContent[0].content);
//                }
            })
            .error(function(err){
                console.log(err);
            });
        }

    };
    
    $scope.render();

    $scope.edit = function(){
        // show textarea, setting to true also hides div
        $scope.textShow = true;
        $scope.saveButton = true;
        console.log("In edit() divContent: " + $scope.divContent[0].content)
        // take input from text area
        // display input to div once 'saved' button clicked
    };
    
    $scope.save = function(section,page){
        $scope.textShow = false;
        $scope.saveButton = false;
        console.log("Changes to be posted in save()");
        console.log($scope.divContent[0].content)
        $http.post('/Box', 
                   { page: page,
                     key: section,
                     content: $scope.divContent[0].content
                   }); 
        $timeout($scope.render, 2000);
    };
    
    $scope.goAbout = function() {
		console.log('goAbout');
		$state.go('about');
	};
    $scope.goBlog = function() {
		console.log('goBlog');
		$state.go('blog');
	};
})
.controller('AboutCtrl', function($scope, $state) {
	$scope.test = 'About';
})
.controller('BlogCtrl', function($scope) {
	$scope.test = 'Blogs';
});