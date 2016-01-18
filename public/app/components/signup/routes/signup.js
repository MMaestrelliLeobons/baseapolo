'use strict';

angular.module('baseapolo.signup', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider
	    		.state('signup', {
	      			url: '/signup',
	      			templateUrl: './app/components/signup/views/signup.html'
	    		});
  		}]);