'use strict';

angular.module('baseapolo.signup', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
	    		.state('signup', {
	      			url: '/signup',
	      			views:{
	      				'': {
	      					templateUrl: './app/components/signup/views/signup.html',
	      				},
	      				'navbar@signup': {
	      					templateUrl: './app/shared/navbar.public/views/navbar.public.html'
	      				},
	      				'footer@signup': {
	      					templateUrl: './app/shared/footer.public/views/footer.public.html'
	      				}
	      			}
	    		});
  		}]);