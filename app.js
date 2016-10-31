(function (){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.product = gem;
	});

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '...',
		img: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xft1/v/t1.0-1/p160x160/11232716_1016905825020111_5306037778368971021_n.jpg?oh=c3c885c71d4e1212aebd843c4d4a5625&oe=58D0A317&__gda__=1486728594_a2c15a9b3098a9ed3fd0118d3543a8c7"
	}

})();
