/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...


var app = angular.module('myApp', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
	.state('home', {
        url: '/home',
        templateUrl: 'home'
    })
    .state('state1', {
        url: '/state1',
        templateUrl: 'state1',
		controller: 'c1'
    })
    .state('state2', {
        url: '/state2/:id',
        templateUrl: 'state2',
		controller: 'c2'
    });
    $urlRouterProvider.otherwise('/home');
});

app.controller('c1', function($scope, $http) {
	$http.get("http://udit.esy.es/ntpc/get_plant_master.php").then(function(response) {
		$scope.data = response.data;
	});
});

app.controller('c2', function($scope, $http, $stateParams) {
	var id_from_state1 = $stateParams.id;
	
	var url = "http://udit.esy.es/ntpc/get_holidays.php";
	
	var data = {id: id_from_state1};

	var config = {
		headers : {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		}
	};

	$http.post(url, data, config)
	.then(function (data) {
		$scope.data = data.data;
		//$scope.id = data;
	});
});