var app = angular.module('app', []);

app.controller('appController', function($scope) {

	$scope.toggleMenu = function(){

		if($scope.menu){
			$scope.menu = '';
		}else{

			$scope.menu = {'left': 0};
			
		}

	}

	$scope.filmes = 
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
	}
	];

});