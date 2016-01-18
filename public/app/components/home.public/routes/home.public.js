'use strict';

angular.module('baseapolo.home.public', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider	
			    .state('homepublic', {
			    	url: '/',
			    	templateUrl: './app/components/home.public/views/home.public.html'
			    });
	  }]);