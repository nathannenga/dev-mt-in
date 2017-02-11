angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    var main = {
        name : 'main',
        url: '/',
        templateUrl: 'main.html',
        controller: 'mainCtrl'
    };

    var viewfriends = {
        name : 'viewfriends',
        url: '/viewfriends',
        templateUrl: 'viewfriends.html',
    };

    var searchFriends = {
        name : 'searchfriends',
        url: '/searchfriends',
        templateUrl: 'searchFriends.html',
        controller: 'friendSearchCtrl'
    };


    $stateProvider.state(main);
    $stateProvider.state(viewfriends);
    $stateProvider.state(searchFriends);
    $urlRouterProvider.otherwise('/');

});
