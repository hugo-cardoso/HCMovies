var app = angular.module('app', ['ngRoute','firebase','angularMoment','naif.base64']);


app.config(function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl : 'pages/home.html',
		controller  : 'homeController'
	})

	.when('/home', {
		templateUrl : 'pages/home.html',
		controller  : 'homeController'
	})

	.when('/postar', {
		templateUrl : 'pages/postar.html',
		controller  : 'postarController'
	})

	.when('/filme', {
		templateUrl : 'pages/filme.html',
		controller  : 'filmeController'
	})


});


app.controller('appController', function($scope, $rootScope, $firebaseArray, $firebaseAuth) {

	var ref = firebase.database().ref("/filmes");

	$rootScope.filmes = $firebaseArray(ref);

	$scope.toggleMenu = function(){

		if($scope.menu){
			$scope.menu = '';
		}else{
			$scope.menu = {'left': 0};	
		}

	}

	$scope.authObj = $firebaseAuth();

	$scope.logar = function(){

		$scope.authObj.$signInWithPopup("google").then(function(result) {
			$rootScope.user = result.user;
		}).catch(function(error) {
			console.error("Authentication failed:", error);
		});

	}

});

app.controller('homeController', function($scope, $rootScope, $location) {

	$scope.abrir = function(x){

		$rootScope.id = x;
		$location.url('filme');

	}

});

app.controller('postarController', function($scope, $rootScope) {

	$scope.enviar = function(){


		var data = String(moment().format('YYYY-MM-DD'));
		var hora = String(moment().format('HH:mm'));
		var titulo = $scope.titulo;
		var ano  = $scope.ano;
		var nota  = $scope.nota;
		var capa  = $scope.capa.base64;

		$scope.filmes.$add({"titulo": titulo, "ano": ano, "nota": nota, "capa": capa, "data": data, "hora": hora}).then(function() {
			$scope.titulo = "";
			$scope.ano = "";
			$scope.nota = "";
			$scope.capa = "";
		}).catch(function(error) {
			console.error("Error: ", error);
		});

	}

});

app.controller('filmeController', function($scope, $rootScope, $firebaseArray) {

	var id = $rootScope.id;

	var ref = firebase.database().ref("/filmes/" + id);

	ref.once("value").then(function(snapshot) {
		$scope.titulo = snapshot.child("titulo").val(); 
		$scope.ano = snapshot.child("ano").val(); 
		$scope.capa = snapshot.child("capa").val(); 
	});

	$scope.notas = $firebaseArray(firebase.database().ref("/filmes/" + id + "/ratings"));

	$scope.notas.$loaded().then(function() {

		$scope.nota = 0;

		for (var i = 0; i < $scope.notas.length; i++) {

			$scope.nota = Number($scope.nota) + Number($scope.notas[i].nota);
			$scope.media = $scope.nota / $scope.notas.length;

			firebase.database().ref("/filmes/" + id).update({nota: $scope.media});

		}

	});

	$scope.avaliar = function(){

		$scope.notas.$add({"nota": $scope.rating.nota}).then(function() {
			

		}).catch(function(error) {
			console.error("Error: ", error);
		});

	}

});