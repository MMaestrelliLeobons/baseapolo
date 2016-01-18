'use strict';

angular.module('baseapolo.home.public', ['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
			$stateProvider	
			    .state('homepublic', {
			    	url: '/',
			    	views:{
			    		'': {
			    			templateUrl: './app/components/home.public/views/home.public.html'
			    		},
			    		'navbar@homepublic':{
			    			templateUrl: './app/shared/navbar.public/views/navbar.public.html'
			    		},
			    		'footer@homepublic':{
			    			templateUrl: './app/shared/footer.public/views/footer.public.html'
			    		}
			    	}
			    });
	  }]);