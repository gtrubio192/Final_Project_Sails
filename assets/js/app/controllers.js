// Glue

angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope,$rootScope, $http, $interval,$timeout, SectionService, $sce) {
  $('.carousel').carousel({
    interval: 3000 //changes the speed
  });
  $rootScope.header = true;
  $rootScope.$on('logout', function(){
      $scope.editButtons = $rootScope.editButtons;
      console.log($scope.editButtons);
  });
 
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
  $rootScope.header = true;
  $rootScope.$on('logout', function(){
      $scope.editButtons = $rootScope.editButtons;
      console.log($scope.editButtons);
  });
  
  $scope.formShow = false;
  SectionService.load('about').then(function(response){
    $scope.sections = _.sortBy(response.data, 'id'); 
    for(var i = 0; i < $scope.sections.length; i++)
    {
      $scope.sections[i].position = JSON.parse($scope.sections[i].position);
      $scope.sections[i].content = $sce.trustAsHtml($scope.sections[i].content);
    }
  });
})
.controller('About2Ctrl', function($scope, $state, $http, SectionService, $sce, $rootScope) {
  $rootScope.$on('logout', function(){
      $scope.editButtons = $rootScope.editButtons;
      console.log($scope.editButtons);
  });
  
  $scope.formShow = false;
  SectionService.load('about2').then(function(response){
    $scope.sections = _.sortBy(response.data, 'id'); 
    for(var i = 0; i < $scope.sections.length; i++)
    {
      $scope.sections[i].position = JSON.parse($scope.sections[i].position);
      $scope.sections[i].content = $sce.trustAsHtml($scope.sections[i].content);
    }
  });
})
.controller('BlogCtrl', function($scope, SectionService, $sce, $rootScope) {
  $rootScope.header = true;
  $scope.test = 'Blogs';
  $rootScope.$on('logout', function(){
      $scope.editButtons = $rootScope.editButtons;
      console.log($scope.editButtons);
  });
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
  $scope.postContent = function(pagePosted){
    console.log("PagePosted: ");
    console.log(pagePosted);
    console.log("State ");
    console.log($state.current.name);
    $scope.page = '';
    
    if(pagePosted === undefined)
    {
      $scope.page = $state.current.name;
    }
    else{
      $scope.page = pagePosted;
    }
    $scope.textShow = false;
    $scope.saveButton = false;
    
    $http.post('/Box/',{
      page: $scope.page,
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
.controller("ContactCtrl", function($state,$rootScope, $scope, $sce, $http){
  $rootScope.header = true;
  $scope.contact = {
    name: '',
    email: '',
    message: '',
    phone: ''
  };
  
  $scope.contactInfo = function(contact){
    console.log("Contact form..." );
    console.log(contact);
    $scope.contactSuccess = '';
    $scope.contactSuccessMessage = '';

    // Checking for blank fields.
    if ($scope.contact.name == '' || $scope.contact.email == '' || $scope.contact.phone == '') {
      alert("Please Fill Required Fields");
    } 
    else {
      $scope.contactSuccess = "Thanks for reaching out " + $scope.contact.name + "!  We'll reach out to you soon.";

      // Returns successful data submission message when the entered information is stored in database.
      $.post("https://formkeep.com/f/f6ef46e658e0", contact)
      .success(function(data) {
        console.log(data);
      })
      .error(function(err){
        console.log("contact error...");
      });
    }
  }
  
})
.controller('LoginCtrl', function($scope, $state, $http, Validate,$rootScope, User) {
	$rootScope.header = false;
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
				console.log(res.user.email);
        $rootScope.user = res.user.email;
        
        // Trying Aarons login
        User.setLoggedInUser(res.user);

        $rootScope.signedIn = true;
//        $state.go($rootScope.from);
        $state.go('home');
			})
			.error(function(err){
				console.log('login error');
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
      console.log("Logged out!...");
      $rootScope.signedIn = false;
      
      $rootScope.$emit('logout');
      console.log($rootScope.from);
      
      if($rootScope.from === 'deltaDashboard'){
        $state.go('deltaLogin');
      }
      else{
        $state.go($rootScope.from);
      }
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
  $rootScope.header = false;
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
        if(err.status == '400'){
          $scope.loginError1 = true;
          $scope.regEmailError = err.summary;
        }
          
				$scope.err = err;
			});	
		}
	};
})
.controller("DeltaDashboardCtrl", function($scope, $sce){
  
});
