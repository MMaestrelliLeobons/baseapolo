#!/bin/bash

usage() {
    echo "Usage: "
    echo "  $0 <component-name>"
    echo "  E.g.: $0 home.public"
    echo ""
    echo "This will create the basic structure for the MEAN component."
    exit 0
}

[ "x$1" == "x" ] && usage

mkdir $1
mkdir "$1/assets"
mkdir "$1/assets/css"
mkdir "$1/assets/img"
mkdir "$1/controllers"
mkdir "$1/routes"
mkdir "$1/services"
mkdir "$1/views"

cat > "$1/assets/css/$1.css" <<EOF
EOF

cat > "$1/controllers/$1.js" <<EOF
'use strict';

angular.module('mean.$1')
	.controller('', ['$scope', 'Global',
	  function($scope, Global) {
// Original scaffolded code.
      $scope.global = Global;
      $scope.package = {
        name: '$1'
      };
    }
  ]);
EOF

cat > "$1/routes/$1.js" <<EOF
'use strict';

angular.module('mean.$1').config(['',
  function() {
    $meanStateProvider.state('', {
      url: '',
      templateUrl: ''
    });
  }
]);
EOF

cat > "$1/services/$1.js" <<EOF
'use strict';

angular.module('mean.$1').factory('', [
  function() {
    return {
      name: '$1'
    };
  }
]);
EOF

cat > "$1/views/$1.html" <<EOF
EOF