// Glue

angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope,$rootScope, $http, $interval,$timeout, SectionService, $sce) {
  $( ".move" ).draggable();
  $( ".move" ).draggable( "disable" );

  $scope.editButtons = $rootScope.editButtons1;
  console.log($scope.editButtons);
  $scope.test = 'You\'re Home';
  $scope.formShow = false;
//  $scope.editButtons = false;
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
      $scope.sections[i].content = $sce.trustAsHtml($scope.sections[i].content);
      console.log("Content with <br>: " + i);
      console.log($scope.sections[i].content);
    }
  });
  console.log($scope.caption);
    
})
.controller('AboutCtrl', function($scope, $state, $http, SectionService, $sce, $rootScope) {
  $scope.test = 'About';
  $scope.editButtons = $rootScope.editButtons1;

  $scope.formShow = false;
  SectionService.load('about').then(function(response){
    $scope.sections = _.sortBy(response.data, 'id'); 
//    console.log("About content " + $scope.sections[0].position);
    for(var i = 0; i < $scope.sections.length; i++)
    {
      $scope.sections[i].position = JSON.parse($scope.sections[i].position);
      $scope.sections[i].content = $sce.trustAsHtml($scope.sections[i].content);
      console.log("Content with <br>: " + i);
      console.log($scope.sections[i].content);
    }
  });
})
.controller('BlogCtrl', function($scope, SectionService, $sce, $rootScope) {
	$scope.test = 'Blogs';
  $scope.editButtons = $rootScope.editButtons1;
  $scope.formShow = false;
  
  SectionService.load('blog').then(function(response){
    $scope.sections = _.sortBy(response.data, 'id');
    for(var i = 0; i < $scope.sections.length; i++)
    {
      $scope.sections[i].position = JSON.parse($scope.sections[i].position);
      $scope.sections[i].content = $sce.trustAsHtml($scope.sections[i].content);
    }
  });
  
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
      $state.reload();
    })
    .error(function(err){
      console.log(err);
    });

    $scope.formShow = false;
    $scope.saveButton = false;
  };
})
.controller("ManufacturerCtrl", function($scope, $sce){
  
})
.controller("ContactCtrl", function($scope, $sce){
  
})
.controller('LoginCtrl', function($scope, $state, $http, Validate,$rootScope) {
	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};
	$scope.htmlCredentials = {
		identifier: '',
		password: ''
	};

	$scope.login = function(htmlCredentials) {
		$scope.error = Validate.credentials(htmlCredentials);

		if(!Validate.hasError($scope.error)) {
			$http.post('/auth/local', htmlCredentials)
			.success(function(res) {
				console.log('Success!');
				console.log(res);
        
				$state.go('home');
        $rootScope.editButtons1 = true;
        $rootScope.signedIn = true;
        $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
            console.log("Moved from " + from + " to " + to);
        });
				if(res.success){
//          $scope.editButtons = true;

          
//          $state.go($scope.previousState);

//					$state.go('home');
				} else {
					$scope.error.generic = res.errors;
				}
				console.log($scope.error);
			})
			.error(function(err){
				console.log('error');
				$scope.errorValidate = 'ERROR';
				return $scope.errorValidate
			});
		}
	};
})
.controller('NavCtrl', function($scope, $http, $state, $rootScope) {
	$scope.logout = function() {
		$http.get('/logout');
    $rootScope.editButtons = !$rootScope.editButtons;
    $rootScope.signedIn = !$rootScope.signedIn;

		$state.go('home');
	};
})
.controller('RegisterCtrl', function($scope, $state, $http, Validate) {
	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};
	$scope.credentials = {
		identifier: '',
		password: ''
	};
	$scope.register = function(credentials, userProfile) {
		$scope.error = Validate.credentials(credentials);
		
		if(!Validate.hasError($scope.error)) {
			var registerObj = {
				username: credentials.identifier,
				email: credentials.identifier,
				password: credentials.password
			};

			var data = {
				user: '',
				email: credentials.identifier,
				password: credentials.password
			};

			console.log(registerObj);
			
			$http.post('/auth/local/register', registerObj)
			.success(function(res) {
//				data.user = res.user.id;
				console.log('Success!');
				console.log(res);
        $state.go('home');

			})
			.error(function(err){
				console.log('error registerting');
				console.log(err);
        console.log(data);

				$scope.err = err;
			});	
		}
	};
});
