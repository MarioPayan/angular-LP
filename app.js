(function (){

	//Modulos
	var app = angular.module('store', []);

	//Controlador
	app.controller('StoreController', function(){
		this.product = gem;
		this.products = gems;


		this.order = "";
		this.reverse = false;
		this.orderBy = function(filter){
			if(this.order === filter){
				this.order = "-".concat(filter);
			}else{
				this.order = filter;
			}
		}

		this.orderreverse = function(){
			this.reverse = !this.reverse;
		}
	});

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		}
	});

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		}
	});

	//Variables .. Variable unica
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '...',
		canPurchase: true,
		soldOut: false,
		img: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xft1/v/t1.0-1/p160x160/11232716_1016905825020111_5306037778368971021_n.jpg?oh=c3c885c71d4e1212aebd843c4d4a5625&oe=58D0A317&__gda__=1486728594_a2c15a9b3098a9ed3fd0118d3543a8c7"
	};

	//Variables .. Arrays
	var gems = [
		{
			name: 'Fuego rojo',
			price: 1.95,
			description: '...',
			canPurchase: true,
			soldOut: false,
			images: [
					{
						full: "http://k42.kn3.net/5213251AE.png",
						thumb: "http://images3.wikia.nocookie.net/__cb20091003182446/es.pokemon/images/a/a4/Fuego_rojo_cover.jpg"
					}
				],
			reviews: [
				{
					stars: 5,
					body: "Una chimba",
					author: "Anonimause"
				}
			]
		},
		{
			name: 'Hoja verde',
			price: 2.74,
			description: '...',
			canPurchase: true,
			soldOut: false,
			images: [
					{
						full: "https://i.ytimg.com/vi/ZQ_Sa_82z_U/maxresdefault.jpg",
						thumb: "http://vignette1.wikia.nocookie.net/es.pokemon/images/3/31/Car%C3%A1tula_de_Verde_Hoja.png/revision/latest?cb=20140922113421"
					}
				],
			reviews: [
				{
					stars: 5,
					body: "Una chimba",
					author: "Anonimause"
				}
			]
		},
		{
			name: 'Ruby',
			price: 3.24,
			description: '...',
			canPurchase: true,
			soldOut: false,
			images: [
					{
						full: "http://3.bp.blogspot.com/-2evaJoF_Zyg/VmDgBoVaXDI/AAAAAAAAALA/FcwNIWwcN8I/s1600/pokemon_advance_profilelarge.jpg",
						thumb: "http://vignette2.wikia.nocookie.net/es.pokemon/images/0/03/Car%C3%A1tula_de_Rub%C3%AD.png/revision/latest?cb=20110508145005"
					}
				],
			reviews: [
				{
					stars: 5,
					body: "Una chimba",
					author: "Anonimause"
				}
			]
		},
		{
			name: 'Zafiro',
			price: 4.45,
			description: '...',
			canPurchase: true,
			soldOut: false,
			images: [
					{
						full: "http://images.teinteresa.es/players/Pokemon-Rubi-Omega-Zafiro-Alfa_TINIMA20140611_0472_1.jpg",
						thumb: "http://vignette3.wikia.nocookie.net/es.pokemon/images/d/d3/Car%C3%A1tula_de_Zafiro.png/revision/latest?cb=20110508145255"
					}
				],
			reviews: [
				{
					stars: 5,
					body: "Una chimba",
					author: "Anonimause"
				}
			]
		},
		{
			name: 'Amarillo',
			price: 5.98,
			description: '...',
			canPurchase: true,
			soldOut: false,
			images: [
					{
						full: "http://www.clasicosbasicos.org/screenshots/rol/pokemon-amarillo/02.jpg",
						thumb: "http://vignette2.wikia.nocookie.net/es.pokemon/images/9/95/Pok%C3%A9mon_Amarillo.png/revision/latest?cb=20160715100157"
					}
				],
			reviews: [
				{
					stars: 5,
					body: "Una chimba",
					author: "Anonimause"
				}
			]
		}
	];

})();
