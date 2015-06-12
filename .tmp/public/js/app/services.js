// Server calls

angular.module('app.services', [])
  ////// Aarons ///////////////////////////////////////////
.service('User', function($rootScope) {
	var user = null;
	return {
		setLoggedInUser: function(u) {
			user = u;
			$rootScope.$emit('LOGIN_EVENT', u);
		},
		isLoggedIn: function() {
			console.log(user);
			if(user === null) {
				return false;
			}
			else {
				return true;
			}
		},
		getInfo: function() {
			return user;
		}
	};
})
  ////// Aarons ///////////////////////////////////////////
.service('SectionService', function($http){
    // page = home, about, blog, etc
    this.load = function(page){
      var pageQuery = {
        page: page
      };

      console.log("Loading..." + page);
// Gathers content from CMS for a page, in ascending order
      return $http.get("/Box/?where=" + JSON.stringify(pageQuery)+"&?sort=id%20ASC")
      .success(function(response) {
        console.log("Load gets success");
        console.log(response);
      })
      .error(function(err){
          console.log(err);
      });
    } // end of load()
})
.factory('Validate', function() {
	return {
		credentials: function(credentials) {
			var error = {
				identifier: '',
				password: ''
			};

			// If identifier property of credentials object above = falsey (null, undefined, 0)
			if(!credentials.identifier) {
				error.identifier = 'Enter your email address.';
			}
			else if(credentials.identifier.indexOf('@') === -1 && credentials.identifier.indexOf('.com') === -1) {
				error.identifier = 'You must enter a valid email.';
			}
			// If identifier property of credentials object above = falsey (null, undefined, 0)
			if(!credentials.password) {
				error.password = 'You must enter a password.';
			}
			return error;
		},

		hasError: function(error) {
			for(var i in error) {
				if(error.hasOwnProperty(i) && error[i]) {
					return true;
				}
			}
			return false;
		}
	};
});