'use strict';

angular.module('baseapolo.home')
	.controller('homeCtrl', ['', 'Global',
	  function(, Global) {
      .global = Global;
      .package = {
        name: 'home'
      };
    }
  ]);
