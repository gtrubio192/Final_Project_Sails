angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope, $http, $interval,$timeout) {
	$scope.test = 'You\'re Home';
    $scope.textShow = false;
    $scope.saveButton = false;
    $scope.divContent = [ { id:'',content: "" } ];
    $scope.divContent1 = [ { id:'',content: "" } ];
    $scope.divContent2 = [ { id:'',content: "" } ];

//    console.log("Original: " + $scope.divContent[0].content);
    
    $scope.render = function(){
        console.log("Top of render(): " + $scope.divContent[0].content)
        // if we have changed and added content...
        if($scope.divContent[0].content == "" || $scope.divContent[0].content)
        {
            $http.get('/Box?=/home&key=header')
            .success(function(response) {
//                console.log("In Header Success Render().");
//                console.log("Response[0].content ");
//                console.log(response[0].content);
                console.log("Header Response whole:");
                console.log(response);
//                console.log("divContent: " + $scope.divContent[0].content);
                $scope.headResponseLen = response.length;
//                console.log($scope.responseLen);
//                console.log("response section: " + response[$scope.responseLen-1].key);
//                
//                $scope.headerPos = _.lastIndexOf(response, response);
//                console.log($scope.headerPos);
                // if we have changed and added content...
                if(response[$scope.headResponseLen-1].key == 'header')
                {
                    console.log("we have a header");
                    $scope.divContent[0].content = response[$scope.headResponseLen-1].content; 
                }
                
            })
            .error(function(err){
                console.log(err);
            });
            
            $http.get('/Box?=/home&key=div1')
            .success(function(response) {
                console.log("In Div 1 Success Render().");
//                console.log("Div 1 Response[0].content ");
//                console.log(response[0].content);
                console.log("Div1 Response whole:");
                console.log(response);
                $scope.div1ResponseLen = response.length;
                
                console.log(response[$scope.div1ResponseLen-1].key);
                
                if(response[$scope.div1ResponseLen-1].key == 'div1')
                {
                    console.log("We have a div1");
                    $scope.divContent1[0].content = response[$scope.div1ResponseLen-1].content; 
                }
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
//        $http.delete('/Box?key=header')
//            .success(function(response){
//                console.log("Delete header key success: " + response);
//            })
//            .error(function(err){
//                console.log("Delete Error : " + err);
//        });
        if(section == 'header')
        {
            console.log("Changes to header posted in save()");
            console.log($scope.divContent[0].content);
            $http.post('/Box', 
                   { page: page,
                     key: section,
                     content: $scope.divContent[0].content
                   });
        }
        else if(section == 'div1')
        {
            console.log("Changes to div1 posted in save()");
            console.log($scope.divContent[0].content);
            $http.post('/Box', 
                   { page: page,
                     key: section,
                     content: $scope.divContent1[0].content
                   });
        }
 
//        PUT ME BACK!!!
//        $timeout($scope.render, 2000);
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