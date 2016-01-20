angular.module('baseapolo', [
	'ui.router',
	'baseapolo.home'])
	.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){
			'use strict';
			$urlRouterProvider.otherwise('/');
		}]);