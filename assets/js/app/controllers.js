// Glue

angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope,$rootScope, $http, $interval,$timeout, SectionService, $sce) {
  $( ".move" ).draggable();
  $( ".move" ).draggable( "disable" );
  $('.carousel').carousel({
    interval: 3000 //changes the speed
  });
  
  $rootScope.$on('logout', function(){
      $scope.editButtons = $rootScope.editButtons;
      console.log($scope.editButtons);

  });
  $scope.test = 'You\'re Home';
  $scope.formShow = false;
  SectionService.load('home').then(function(response){
   // need to sort when a new line is added to textbox
    $scope.sections = _.sortBy(response.data, 'id');
    for(var i = 0; i < $scope.sections.length; i++)
    {
      $scope.sections[i].position = JSON.parse($scope.sections[i].position);
      $scope.sections[i].content = $sce.trustAsHtml($scope.sections[i].content);
    }
  });
  console.log($scope.caption);
    
})
.controller('AboutCtrl', function($scope, $state, $http, SectionService, $sce, $rootScope) {
  $scope.test = 'About';
  $scope.editButtons = $rootScope.editButtons;

  $scope.formShow = false;
  SectionService.load('about').then(function(response){
    $scope.sections = _.sortBy(response.data, 'id'); 
    for(var i = 0; i < $scope.sections.length; i++)
    {
      $scope.sections[i].position = JSON.parse($scope.sections[i].position);
      $scope.sections[i].content = $sce.trustAsHtml($scope.sections[i].content);
//      console.log("Content with <br>: " + i);
//      console.log($scope.sections[i].content);
    }
  });
})
.controller('BlogCtrl', function($scope, SectionService, $sce, $rootScope) {
	$scope.test = 'Blogs';
  $scope.editButtons = $rootScope.editButtons;
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
    $scope.loginError1 = false;
    $scope.loginError2 = false;
		$scope.error = Validate.credentials(htmlCredentials);

		if(!Validate.hasError($scope.error)) {
			$http.post('/auth/local', htmlCredentials)
			.success(function(res) {
				console.log('Login Success!');
				console.log(res);
        
        $rootScope.editButtons = true;
        $rootScope.signedIn = true;
        console.log("Logged in. Edit and signed in values are: ");
        console.log($rootScope.editButtons);
        $state.go($rootScope.from);
			})
			.error(function(err){
				console.log('error');
        console.log(err.summary);
        if(err.status == '401'){
          $scope.passwordError = err.summary;
          $scope.loginError2 = true;
        }
        else if(err.status == '404'){
          $scope.emailError = err.summary;
          $scope.loginError1 = true;
        }
//				$scope.errorValidate = 'ERROR';
//				return $scope.errorValidate;
			});
		}
	};
})
.controller('NavCtrl', function($scope, $http, $state, $rootScope, User) {
  $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
      $rootScope.from = from;
      $rootScope.to = to;
  });
  ////// Aarons ///////////////////////////////////////////
  $scope.isLoggedIn = User.isLoggedIn();
	$scope.user = User.getInfo();
	$rootScope.$on('LOGIN_EVENT', function() {
		$scope.isLoggedIn = User.isLoggedIn();
		$scope.user = User.getInfo();
		console.log('LOGIN HAPPENED');
		console.log($scope.isLoggedIn);
	});
  ////// Aarons ///////////////////////////////////////////

	$scope.logout = function() {
		$http.get('/logout')
    .success(function(res){
      console.log("Logged out! Edit value is...");
      $rootScope.editButtons = false;
      $rootScope.signedIn = false;
      
      $rootScope.$emit('logout');
      $state.go($rootScope.from);
      console.log($rootScope.editButtons);
    })
    .error(function(err){
      console.log("Error Logging out!");
      console.log(err);
    });
    
//    $rootScope.editButtons = !$rootScope.editButtons;
//    $rootScope.signedIn = !$rootScope.signedIn;

//		$state.go('home');
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
