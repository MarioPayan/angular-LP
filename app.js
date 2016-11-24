(function (){

	var app = angular.module('store', ['store-products', 'store-services', 'ngRoute', 'ngStorage']);

	app.config(['$routeProvider', function config($routeProvider){
		$routeProvider.when('/', {templateUrl: 'src/templates/dashboard.html', controller:'StoreController', controllerAs: 'store'});
		$routeProvider.when('/product/:id', {templateUrl:'src/templates/detail.html', controller:'DetailController'});
		$routeProvider.otherwise('/');
	}]);

	app.constant('configTmdb', {
		apiUri: 'https://api.themoviedb.org/3/',
		apiKey: '518d83af872f927b98cfe36a90cd05b0'
	});

	app.controller('DetailController',['localStorageHandler', 'dataStorage', '$scope', '$routeParams', '$location', 'tmdb', '$timeout' ,function(localStorageHandler, dataStorage, $scope, $routeParams, $location, tmdb, $timeout){
		$scope.test = 'k ase';
		console.log($routeParams['id']);

		var timemeOutSearch = '';


		$scope.$watch('test' ,function(newSearch, oldSearch){
			if(timemeOutSearch){
				$timeout.cancel(timemeOutSearch);
			}
			timemeOutSearch = $timeout(function(){
				$scope.executeSearch();
			}, 1500)
		});

		$scope.executeSearch = function() {
			console.log('ejecutando busqueda');
			console.log($scope.test);
		}

		$scope.goDashboard = function(){
			$location.path('/');
		};

		$scope.getPopularMovies = function(){
			var moviesPopular = tmdb.getPopularMovies('movie/popular', '&language=en-US');
			moviesPopular.then(function(data){
				$scope.moviesPopular = data.data;
				console.log(data.data);
			}, function(error){
				alert(error.statusText);
			});
		}

		$scope.getAllMovies = function(){
			var getAll = tmdb.getAllMovies();
			getAll.then(function(data){
				console.log(data);
			})
		}
	}]);

	app.controller('StoreController',['localStorageHandler', 'dataStorage', function(localStorageHandler, dataStorage){
		
		var store = this;
		this.product = [];
		
		dataStorage.getData().then(function(promise){
			store.products = promise.data;
		});
		
		store.storage = localStorageHandler;
		
		store.order = "";
		store.reverse = false;
		
		store.orderBy = function(filter){
			store.order = filter;
		}

		store.orderReverse = function(reverse){
			if(reverse==="false"){
				store.reverse = false;
			}
			if(reverse==="true"){
				store.reverse = true;
			}
		}
	}]);

	app.controller("PanelController", function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		
		this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
	});

	app.controller("ReviewController", function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});
})();
