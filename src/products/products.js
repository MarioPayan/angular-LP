(function(){
	var app = angular.module('store-products', []);
	app.directive('productTitle', function(){
		return {
			restrict: 'A',
			templateUrl: 'src/products/product-title.html'
		};
	});

	app.directive('productGallery', function(){});
	app.directive('productOptions', function(localStorageHandler) {
	    return {
			restrict: 'E',
			templateUrl: 'src/products/product-options.html',
			controller: function(){
				this.addToCart = function(product){
					localStorageHandler.setProduct(product);
				};
			},
			controllerAs: "options"
	    };
	});
	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'src/products/product-panels.html',
			controller:function(){
					this.tab=1;

				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};

			},
			controllerAs: 'panel'
		};
	});
	
})();