myApp.config(function($locationProvider, $urlRouterProvider, $stateProvider) {

	$locationProvider.hashPrefix('!');
	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('beef', {
		url: "/beef",
		templateUrl: "views/foods/food.html",
		resolve: {
			foodData:  function($http){
	            return $http({method: 'GET', url: 'data/beef.json'});
	        },
		},
		controller: 'foodCtrl',
		data: {
			label: 'Beef',
			icon: 'fi fi-cow',
		}
	})

	.state('pork', {
		url: "/pork",
		templateUrl: "views/foods/food.html",
		resolve: {
			foodData:  function($http){
	            return $http({method: 'GET', url: 'data/pork.json'});
	        },
		},
		controller: 'foodCtrl',
		data: {
			label : 'Pork',
			icon: 'fi fi-pig',
		}
	})

	.state('chicken', {
		url: "/chicken",
		templateUrl: "views/foods/food.html",
		resolve: {
			foodData:  function($http){
	            return $http({method: 'GET', url: 'data/chicken.json'});
	        },
		},
		controller: 'foodCtrl',
		data: {
			label : 'Chicken',
			icon: 'fi fi-chicken',
		}
	})

	.state('turkey', {
		url: "/turkey",
		templateUrl: "views/foods/food.html",
		resolve: {
			foodData:  function($http){
	            return $http({method: 'GET', url: 'data/turkey.json'});
	        },
		},
		controller: 'foodCtrl',
		data: {
			label : 'Turkey',
			icon: 'fi fi-turkey',
		}
	})

	.state('lamb', {
		url: "/lamb",
		templateUrl: "views/foods/food.html",
		resolve: {
			foodData:  function($http){
	            return $http({method: 'GET', url: 'data/lamb.json'});
	        },
		},
		controller: 'foodCtrl',
		data: {
			label : 'Lamb',
			icon: 'fi fi-lamb',
		}
	})

	.state('fish', {
		url: "/fish",
		templateUrl: "views/foods/food.html",
		resolve: {
			foodData:  function($http){
	            return $http({method: 'GET', url: 'data/fish.json'});
	        },
		},
		controller: 'foodCtrl',
		data: {
			label : 'Fish',
			icon: 'fi fi-fish',
		}
	})

	.state('home', {
		url: "/",
		templateUrl: "views/home/home.html",

	})
});
