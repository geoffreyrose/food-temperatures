myApp.config(function($locationProvider, $urlRouterProvider, $stateProvider) {


	$locationProvider.hashPrefix('!');
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('beef', {
			url: "/beef",
			templateUrl: "views/foods/food.html",
			controller: function($scope,$state){
				$scope.food = $state.current.data
			},
			data: {
				label: 'Beef',
				icon: 'fi fi-cow',
				states: [
					{
						label: 'Rare',
						temperatures: [
							{
								fahrenheit: '120\260 \u2013 125\260',
								celsius: '48.9\260- 51.6\260'
							}
						]
					},
					{
						label: 'Medium Rare',
						temperatures: [
							{
								fahrenheit: '130\260 \u2013 135\260',
								celsius: '54.4\260 - 57.2\260'
							}
						]
					},
					{
						label: 'Medium',
						temperatures: [
							{
								fahrenheit: '140\260 \u2013 145\260',
								celsius: '60.0\260 - 62.8\260'
							}
						]
					},
					{
						label: 'Medium Well',
						temperatures: [
							{
								fahrenheit: '150\260 \u2013 155\260',
								celsius: '65.5\260 - 68.3\260'
							}
						]
					},
					{
						label: 'Well Done',
						temperatures: [
							{
								fahrenheit: '160\260',
								celsius: '71.1\260'
							}
						]
					},
					{
						label: 'Ground',
						temperatures: [
							{
								fahrenheit: '160\260',
								celsius: '71.1\260'
							}
						]
					}
				]
			}
		})

		.state('pork', {
			url: "/pork",
			templateUrl: "views/foods/food.html",
			controller: function($scope,$state){
				$scope.food = $state.current.data
			},
			data: {
				label : 'Pork',
				icon: 'fi fi-pig',
				states: [
					{
						label: 'Medium Rare',
						temperatures: [
							{
								fahrenheit: '145\260',
								celsius: '62.8\260'
							}
						]
					},
					{
						label: 'Medium',
						temperatures: [
							{
								fahrenheit: '150\260',
								celsius: '65.5\260'
							}
						]
					},
					{
						label: 'Well Done',
						temperatures: [
							{
								fahrenheit: '160\260',
								celsius: '71.8\260'
							}
						]
					},
					{
						label: 'Ground',
						temperatures: [
							{
								fahrenheit: '160\260',
								celsius: '71.8\260'
							}
						]
					},
				]

			}
		})

		.state('chicken', {
			url: "/chicken",
			templateUrl: "views/foods/food.html",
			controller: function($scope,$state){
				$scope.food = $state.current.data
			},
			data: {
				label : 'Chicken',
				icon: 'fi fi-chicken',
				states: [
					{
						label: 'Cook To',
						temperatures: [
							{
								fahrenheit: '165\260 \u2013 175\260',
								celsius: '73.9\260 \u2013 80\260'
							}
						]
					},
				]
			}
		})

		.state('turkey', {
			url: "/turkey",
			templateUrl: "views/foods/food.html",
			controller: function($scope,$state){
				$scope.food = $state.current.data
			},
			data: {
				label : 'Turkey',
				icon: 'fi fi-turkey',
				states: [
					{
						label: 'Cook To',
						temperatures: [
							{
								fahrenheit: '165\260 \u2013 175\260',
								celsius: '73.9\260 \u2013 80\260'
							}
						]
					},
				]
			}
		})

		.state('lamb', {
			url: "/lamb",
			templateUrl: "views/foods/food.html",
			controller: function($scope,$state){
				$scope.food = $state.current.data
			},
			data: {
				label : 'Lamb',
				icon: 'fi fi-lamb',
				states: [
					{
						label: 'Rare',
						temperatures: [
							{
								fahrenheit: '135\260',
								celsius: '57.2\260'
							}
						]
					},
					{
						label: 'Medium Rare',
						temperatures: [
							{
								fahrenheit: '140\260 \u2013 150\260',
								celsius: '60\260 - 65.5\260'
							}
						]
					},
					{
						label: 'Medium',
						temperatures: [
							{
								fahrenheit: '160\260',
								celsius: '71.1\260'
							}
						]
					},
					{
						label: 'Well Done',
						temperatures: [
							{
								fahrenheit: '165\260',
								celsius: '73.9\260'
							}
						]
					}
				]
			}
		})

		.state('fish', {
			url: "/fish",
			templateUrl: "views/foods/food.html",
			controller: function($scope,$state){
				$scope.food = $state.current.data
			},
			data: {
				label : 'Fish',
				icon: 'fi fi-fish',
				states: [
					{
						label: 'Cook To',
						temperatures: [
							{
								fahrenheit: '145\260',
								celsius: '62.8\260'
							}
						]
					},
				]
			}
		})

		.state('home', {
			url: "/",
			templateUrl: "views/home/home.html",

		})
});
