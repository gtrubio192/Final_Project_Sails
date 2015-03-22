// Server calls

angular.module('app.services', [])
.service('SectionService', function($http){
    // page = home, about, blog, etc
    this.load = function(page){
      var pageQuery = {
        page: page
      };

      console.log("Loading..." + page);
      $( ".move" ).draggable();

//          $http.get('/Box/' + $scope.id, 
//  THIS WORKS
//      return $http.get("/Box/?sort=createdAt DESC")
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
			// If identifier property of credentials object above is not an email 
			// (using validator.js method isEmail)
			else if(!validator.isEmail(credentials.identifier)) {
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

//		userProfile: function(userProfile) {
//			var errorProfile = {
//				firstName: '',
//				lastName: '',
//				dateOfBirth: '',
//				mobilePhone: ''
//			};
//			
//			// If url property of credentials object above = falsey (null, undefined, 0)
//			if(!userProfile.firstName) {
//				errorProfile.firstName = 'You must enter your first name.';
//			}
//			// If url property of credentials object above = falsey (null, undefined, 0)
//			if(!userProfile.lastName) {
//				errorProfile.lastName = 'You must enter your last name.';
//			}
//			if(!userProfile.mobilePhone) {
//				errorProfile.mobilePhone = 'You must enter your mobile phone number.';
//			}
//
//			if(!userProfile.dateOfBirth) {
//				errorProfile.dateOfBirth = 'You must enter a date of birth.';
//			}
//			return errorProfile;
//		}
	};
});