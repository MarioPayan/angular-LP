(function(){
	var app = angular.module('store-services', []);

	app.service('localStorageHandler', ['$localStorage', function($localStorage){
		return {
			setProduct: function(product){
				var products = ($localStorage.products) ? $localStorage.products : [];
				products.push(product);
				$localStorage.products = products;
			},
			getProducts: function(){
				return $localStorage.products;
			},
			removeProduct: function(index){
				$localStorage.products.splice(index, 1);
			},
			getAmount: function(){
				return $localStorage.products.length;
			}
		}
	}]);

	app.service('tmdb',['$http', 'configTmdb', '$q', function($http, configTmdb, $q){
		return{
			getPopularMovies: function(uri, params){
				return $http.get(configTmdb.apiUri+uri+'?api_key='+configTmdb.apiKey+params);
			},
			getAllMovies: function(){
				var defer = $q.defer();
				var endpoints = ['movie/popular', 'genre/tv/list', 'genre/movie/list']

				var promises = endpoints.map(function(uri){
					return $http.get(configTmdb.apiUri+uri+'?api_key='+configTmdb.apiKey+'&language=en-US');
				});

				return $q.all(promises);

				defer.resolve({message: 'ok'});
				defer.reject({message:'not ok'});
				return defer.promise;
			}
		}
	}]);
	
	app.service('dataStorage',['$http', function($http){
		return{
			getData: function(){
				return $http.get('./data/products.json');
			}
		}
	}]);
})();
