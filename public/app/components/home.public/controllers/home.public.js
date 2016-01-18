'use strict';

angular.module('baseapolo.home.public')
	.controller('', ['', 'Global',
		function(, Global) {
	      	.global = Global;
	      	.package = {
	        	name: 'home.public'
	      	};
    	}]);