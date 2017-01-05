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
		"titulo"   : "Star Wars: Episode III",
		"subtitulo": "2005",
		"nota"	   : 8.5,
		"capa"     : "Star-Wars-Episode-III-Revenge-Of-The-Sith"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	},{
		"titulo"   : "Star Wars: Episode II",
		"subtitulo": "2002",
		"nota"	   : 8,
		"capa"     : "Star-Wars-Episode-II-Attack-Of-The-Clones"
	}
	];

});

app.controller('homeController', function($scope, $rootScope) {




});