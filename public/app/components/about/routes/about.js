'use strict';

angular.module('baseapolo.about', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',
  		function($stateProvider,$urlRouterProvider) {
  			$stateProvider
	    		.state('about', {
	      			url: '/about',
	      			views:{
	      				'':{
	      					templateUrl: './app/components/about/views/about.html'
	      				},
	      				'navbar@about':{
	      					templateUrl: './app/shared/navbar.public/views/navbar.public.html'
	      				},
	      				'footer@about':{
	      					templateUrl: './app/shared/footer.public/views/footer.public.html'
	      				}
	      			}
	    		});
  		}
	]);