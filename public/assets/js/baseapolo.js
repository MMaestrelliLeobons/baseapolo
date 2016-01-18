angular.module('baseapolo', [
	'ui.router',
	'baseapolo.about',
	'baseapolo.home.public',
	'baseapolo.signup'])
	.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){
			'use strict';
			$urlRouterProvider.otherwise('/');
		}]);