var myApp = angular.module('myApp', ['ui.router'])

.controller('pageToggleCtrl', function ($scope) {
	$scope.showPage = false;
	$scope.showPageToggle = function() {
	  $scope.showPage = !$scope.showPage;
	}

	$scope.temperatureType = false;
	$scope.temperatureTypeToggle = function() {
	 	$scope.temperatureType = !$scope.temperatureType;
	}
})

.controller('foodCtrl', function($scope, $state, foodData){
	$scope.food = $state.current.data
	$scope.doneLevels = foodData.data;
});
