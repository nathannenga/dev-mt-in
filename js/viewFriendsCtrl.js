angular.module('app').controller('viewFriendsCtrl', function($scope, dataService){
  $scope.userData = dataService.getData();
  $scope.thisUser = dataService.getUser();


})
