/* jshint devel:true */
// ui.router is another dependency
angular.module('app', ['app.controllers', 'ui.router','app.directives', 'app.services'])
// provider is 3 types of services
// can only use providers inside of .config
  ////// Aarons ///////////////////////////////////////////
.run(function($http, User, $rootScope) {
	$http.get('/auth/user')
	.success(function(user) {
    console.log("running login check");
		User.setLoggedInUser(user);
    $rootScope.signedIn = true;
    $rootScope.user = user.email;

	})
	.error(function(err) {
		console.log(err);
	});
})
  ////// Aarons ///////////////////////////////////////////
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
    // chaining .state(name, { config object about this route });
    // another angular method, just like .controller or .factory
	.state('home', {
        // name in url, what will appear in browser appended to url
		url: "/home",
        // passing in template file path, could write it in on ln 10 if you wanted
		templateUrl: "templates/home.html",
        // specify what controller to use
		controller: "HomeCtrl"
	})
	.state('blog', {
		url: "/blog",
		templateUrl: "templates/blog.html",
		controller: "BlogCtrl"
	})
	.state('about', {
		url: "/about",
		templateUrl: "templates/about.html",
		controller: "AboutCtrl"
	})
  .state('about2', {
//		url: "/about2",
//		templateUrl: "templates/about2.html",
		controller: "About2Ctrl"
	})
  .state('post', {
		url: "/about",
		templateUrl: "templates/about.html",
		controller: "PostCtrl"
	})
  .state('contact', {
		url: "/contact",
		templateUrl: "templates/contact.html",
		controller: "ContactCtrl"
	})
  .state('contactForm', {
		url: "/contact#form",
		templateUrl: "templates/contact.html",
		controller: "ContactCtrl"
	})
  .state('manufacturer', {
		url: "/manufacturer",
		templateUrl: "templates/manufacturer.html",
		controller: "ManufacturerCtrl"
	})
  .state('login', {
		url: '/user/login',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	})
	.state('register', {
		url: '/user/register',
		templateUrl: 'templates/register.html',
		controller: 'RegisterCtrl'
	})
// ******** Take last 5 states out for Total Roofing ********
  .state('deltaLogin', {
		url: "/deltaLogin",
		templateUrl: "templates/deltaLogin.html",
		controller: "LoginCtrl"
	})
  .state('deltaDashboard', {
		url: "/deltaDashboard",
		templateUrl: "templates/deltaDashboard.html",
		controller: "DeltaDashboardCtrl"
	})
// ******** Take last 5 states out for Total Roofing ********

// specifies what the defualt page is
	$urlRouterProvider.otherwise("/home");
});