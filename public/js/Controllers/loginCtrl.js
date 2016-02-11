angular.module('iDocsApp')
// .controller('iDocsCtrl', function($scope){
.controller('loginCtrl', function(authService, $state, $scope){
    var auth = this;
	auth.test = 'auth';
	auth.showRegister = false;
	auth.user = {};
	auth.message = $state.params.message || '';

	auth.toggleRegister = function () {
		auth.showRegister = !auth.showRegister;
	};

	authService.findMyOrders().then(function (orders) {
		auth.orders = orders;
	});

	auth.register = function () {
		authService.register(auth.user)
			.then(function (message) {
				// console.log(message);
			})
			.catch(function (err) {
				console.log(err);
			});
		auth.user = {};

	};

	auth.login = function () {
		authService.login(auth.user)
			.then(function () {
				if ($state.params.message) {
					$state.go('main.checkout');
				}
				authService.findMyOrders().then(function (orders) {
					auth.orders = orders;
				});
				//user is now logged in and saved in localStorage
			})
			.catch(function (err) {
				console.log(err);
				$state.go('main.auth');
			});
		auth.user = {};
	};

	auth.logout = function () {
		authService.logout();
	};

	auth.isLoggedIn = function () {
		return authService.isLoggedIn();
	};
});