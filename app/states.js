myApp.config(function($locationProvider, $urlRouterProvider, $stateProvider) {
	
	$locationProvider.hashPrefix('!');
	$urlRouterProvider.otherwise("/");
	
	$stateProvider
		.state('beef', {
			url: "/beef",
			templateUrl: "views/foods/food.html",
			controller: function($scope) {
		    	$scope.food = {
		    		label : 'Beef'
		    	}
		     }
		})

		.state('pork', {
			url: "/pork",
			templateUrl: "views/foods/food.html",
			controller: function($scope) {
		    	$scope.food = {
		    		label : 'Pork'
		    	}
		     }
		})

		.state('chicken', {
			url: "/chicken",
			templateUrl: "views/foods/food.html",
			controller: function($scope) {
		    	$scope.food = {
		    		label : 'Chicken'
		    	}
		     }
		})

		.state('turkey', {
			url: "/turkey",
			templateUrl: "views/foods/food.html",
			controller: function($scope) {
		    	$scope.food = {
		    		label : 'Turkey'
		    	}
		     }
		})

		.state('lamb', {
			url: "/lamb",
			templateUrl: "views/foods/food.html",
			controller: function($scope) {
		    	$scope.food = {
		    		label : 'Lamb'
		    	}
		     }
		})

		.state('fish', {
			url: "/fish",
			templateUrl: "views/foods/food.html",
			controller: function($scope) {
		    	$scope.food = {
		    		label : 'Fish'
		    	}
		     }
		})

		.state('home', {
			url: "/",
			templateUrl: "views/home/home.html",

		})
});