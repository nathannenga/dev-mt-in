angular.module('app').config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
        controller: "mainCtrl"
    })
    .when("/viewfriends", {
        templateUrl : "viewfriends.html"
    });
});
