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
        controller: 'viewFriendsCtrl'
    };

    var searchFriends = {
        name : 'searchfriends',
        url: '/searchfriends',
        templateUrl: 'searchFriends.html',
        controller: 'friendSearchCtrl'
    };

    var updateProfile = {
        name : 'updateProfile',
        url: '/updateprofile',
        templateUrl: 'updateProfile.html',
        controller: 'updateProfileCtrl'
    };


    $stateProvider.state(main);
    $stateProvider.state(viewfriends);
    $stateProvider.state(searchFriends);
    $stateProvider.state(updateProfile);
    $urlRouterProvider.otherwise('/');

});
