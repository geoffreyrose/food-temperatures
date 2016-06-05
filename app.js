var myApp = angular.module('myApp', ['ui.router']);

myApp.controller('pageToggleCtrl', function ($scope) {
	$scope.showPage = false;
	$scope.showPageToggle = function() {
	  $scope.showPage = !$scope.showPage;
	}

	$scope.temperatureType = false;
	$scope.temperatureTypeToggle = function() {
	  $scope.temperatureType = !$scope.temperatureType;
	}   
});