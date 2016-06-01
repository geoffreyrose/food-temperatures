'use strict';

angular.module('myApp.beef', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/beef', {
    templateUrl: 'views/foods/beef.html',
    controller: 'BeefCtrl'
  });
}])

.controller('BeefCtrl', [function() {

}]);


angular.module('myApp.pork', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pork', {
    templateUrl: 'views/foods/pork.html',
    controller: 'PorkCtrl'
  });
}])

.controller('PorkCtrl', [function() {

}]);


angular.module('myApp.chicken', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chicken', {
    templateUrl: 'views/foods/chicken.html',
    controller: 'ChickenCtrl'
  });
}])

.controller('ChickenCtrl', [function() {

}]);


angular.module('myApp.turkey', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/turkey', {
    templateUrl: 'views/foods/turkey.html',
    controller: 'TurkeyCtrl'
  });
}])

.controller('TurkeyCtrl', [function() {

}]);


angular.module('myApp.lamb', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lamb', {
    templateUrl: 'views/foods/lamb.html',
    controller: 'LambCtrl'
  });
}])

.controller('LambCtrl', [function() {

}]);


angular.module('myApp.fish', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fish', {
    templateUrl: 'views/foods/fish.html',
    controller: 'FishCtrl'
  });
}])

.controller('FishCtrl', [function() {

}]);