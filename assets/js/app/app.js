/* jshint devel:true */
// ui.router is another dependency
angular.module('app', ['app.controllers', 'ui.router','app.directives', 'app.services'])
// provider is 3 types of services
// can only use providers inside of .config
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
  .state('manufacturer', {
		url: "/manufacturer",
		templateUrl: "templates/manufacturer.html",
		controller: "ManufacturerCtrl"
	});
// specifies what the defualt page is
	$urlRouterProvider.otherwise("/home");
});