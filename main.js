var mainApp = angular.module("mainApp",[ngRoute]);
mainApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/'{
			templateUrl:'Template/main.html',
				controller:'mainController'
		}).
		when('/contacts',{
			templateUrl:'Template/contacts.html',
			controller:'contactsController'
		}).
		Otherwise({
			redirectTo:'/'
		});
}]);
mainApp.controller("mainController",function($scope){
	$scope.message="Hello";
});
