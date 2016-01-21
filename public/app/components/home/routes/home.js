'use strict';

angular.module('baseapolo')
	.config(
		function($stateProvider, $urlRouterProvider, $locationProvider) {
			$stateProvider
                .state('home', {
                    url: '/',
                    abstract: true,
                    controller: 'homeCtrl',
                    views: {
                        '@': {
                            templateUrl: './app/components/home/views/home.html'
                        }
                    }
                })

			    .state('home.signin', {
			    	url: '',
			    	views:{
			    		'content':{
			    			templateUrl: './app/components/home/views/signin.html'
			    		}
			    	}
			    })

			    .state('home.signup', {
			    	url: 'signup',
			    	views:{
			    		'content':{
			    			templateUrl: './app/components/home/views/signup.html'
			    		}
			    	}
			    })

			    .state('home.about', {
			    	url: 'about',
			    	views:{
			    		'content':{
			    			templateUrl: './app/components/home/views/about.html'
			    		}
			    	}
			    });
                
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
	  });
