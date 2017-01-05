var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {

	$routeProvider

            //Home
            .when('/', {
            	templateUrl : 'pages/home.html',
            	controller  : 'homeController'
            })

        });

app.controller('appController', function($scope, $rootScope) {

	$scope.toggleMenu = function(){

		if($scope.menu){
			$scope.menu = '';
		}else{
			$scope.menu = {'left': 0};	
		}

	}

	$rootScope.filmes = 
	[
	{
		"titulo"   : "Star Wars: Episode I",
		"subtitulo": "1999",
		"nota"	   : 6.5,
		"capa"     : "Star-Wars-Episode-I-The-Phantom-Menace"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 6.7,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode III",
		"subtitulo": "2005",
		"nota"	   : 7.6,
		"capa"     : "Star-Wars-Episode-III-Revenge-Of-The-Sith"
	},{
		"titulo"   : "Star Wars: Episode IV",
		"subtitulo": "1997",
		"nota"	   : 8.7,
		"capa"     : "Star-Wars-Episode-IV-A-New-Hope"
	},{
		"titulo"   : "Star Wars: Episode V",
		"subtitulo": "1980",
		"nota"	   : 8.8,
		"capa"     : "Star-Wars-Episode-V-The-Empire-Strikes-Back"
	},{
		"titulo"   : "Star Wars: Episode VI",
		"subtitulo": "1983",
		"nota"	   : 8.4,
		"capa"     : "Star-Wars-Episode-VI-Return-Of-The-Jedi"
	},{
		"titulo"   : "Star Wars: Episode VII",
		"subtitulo": "2005",
		"nota"	   : 8.1,
		"capa"     : "Star-Wars-Episode-VII-The-Force-Awakens"
	}
	];

});

app.controller('homeController', function($scope, $rootScope) {




});