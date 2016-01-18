'use strict';

angular.module('baseapolo.about', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',
  		function($stateProvider,$urlRouterProvider) {
  			$stateProvider
	    		.state('about', {
	      			url: '/about',
	      			templateUrl: './app/components/about/views/about.html'
	    		});
  		}
	]);