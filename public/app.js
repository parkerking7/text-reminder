var app = angular.module("textApp",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {

$routeProvider
    .when('/home', {
        controller: 'homeController',
        templateUrl: 'home/home.html'
    })
    .when("/reminders", {
        controller: "remindersController",
        templateUrl: "reminders/reminders.html"
    })
    .otherwise({
        redirectTo: '/home'
    });




}]);