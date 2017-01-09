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
			console.log($rootScope.user);
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

app.controller('postarController', function($scope, $rootScope, $location) {

	if($rootScope.user){

		if($rootScope.user.uid != "iau7O1FMSfP9EObrWnGQDd5QZjs1"){

			$location.url('home');

		}else{

			$scope.enviar = function(){

				var data = String(moment().format('YYYY-MM-DD'));
				var hora = String(moment().format('HH:mm'));
				var titulo = $scope.titulo;
				var ano  = $scope.ano;
				var nota  = $scope.nota;
				var capa  = $scope.capa.base64;

				$scope.filmes.$add({"titulo": titulo, "ano": ano, "nota": 0, "qtNota": 0, "capa": capa, "data": data, "hora": hora}).then(function() {
					$scope.titulo = "";
					$scope.ano = "";
					$scope.capa = "";
				}).catch(function(error) {
					console.error("Error: ", error);
				});

			}

		}		

	}else{

		$location.url('home');
	}	

});

app.controller('filmeController', function($scope, $rootScope, $firebaseArray, $filter) {

	var id = $rootScope.id;

	var ref = firebase.database().ref("/filmes/" + id);

	$scope.update = function(){
		ref.once("value").then(function(snapshot) {
			$scope.$apply(function () {
				$scope.titulo = snapshot.child("titulo").val(); 
				$scope.ano = snapshot.child("ano").val(); 
				$scope.capa = snapshot.child("capa").val();
				$scope.qtNota = snapshot.child("qtNota").val();
				$scope.nota = snapshot.child("nota").val();
			});
		});
	}

	$scope.update();

	$scope.avaliar = function(){

		var novaNota = Number($scope.nota) + Number($scope.rating.nota);

		firebase.database().ref("/filmes/" + id).update({"nota": novaNota, "qtNota": $scope.qtNota + 1}).then(function() {
			
			$scope.update();

		}).catch(function(error) {
			console.error("Error: ", error);
		});

	}

});