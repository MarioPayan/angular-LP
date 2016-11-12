(function (){

	var app = angular.module('store', ['store-products', 'store-services', 'ngStorage']);

	app.controller('StoreController',['localStorageHandler', 'dataStorage',function(localStorageHandler, dataStorage){
		
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
