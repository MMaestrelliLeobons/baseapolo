'use strict';

angular.module('baseapolo.home', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider	
			    .state('signin', {
			    	url: '/',
			    	views:{
			    		'': {
			    			templateUrl: './app/components/home/views/home.html'
			    		},
			    		'content@signin':{
			    			templateUrl: './app/components/home/views/signin.html'
			    		}
			    	}
			    })

			    .state('signup', {
			    	url: '/signup',
			    	views:{
			    		'': {
			    			templateUrl: './app/components/home/views/home.html'
			    		},
			    		'content@signup':{
			    			templateUrl: './app/components/home/views/signup.html'
			    		}
			    	}
			    })

			    .state('about', {
			    	url: '/about',
			    	views:{
			    		'': {
			    			templateUrl: './app/components/home/views/home.html'
			    		},
			    		'content@about':{
			    			templateUrl: './app/components/home/views/about.html'
			    		}
			    	}
			    });
	  }]);
