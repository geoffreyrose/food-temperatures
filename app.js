(function(){
	angular.module('myApp', ['ui.router']);

	angular.module('myApp').controller('pageToggleCtrl', pageToggleCtrl);
	pageToggleCtrl.$inject = ['$scope'];

	function pageToggleCtrl($scope) {
		$scope.showPage = false;
		$scope.showPageToggle = function() {
		  $scope.showPage = !$scope.showPage;
		}

		$scope.temperatureTypeCelsius = false;
		$scope.temperatureTypeToggle = function() {
		 	$scope.temperatureTypeCelsius = !$scope.temperatureTypeCelsius;
		}
	}

	angular.module('myApp').controller('foodCtrl', foodCtrl);
	foodCtrl.$inject = ['$scope', '$state', 'foodData'];

	function foodCtrl($scope, $state, foodData){
		$scope.food = $state.current.data
		$scope.doneLevels = foodData.data;
	}

})();
