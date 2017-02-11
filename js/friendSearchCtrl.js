angular.module('app').controller('friendSearchCtrl', function($scope, dataService){
  $scope.userData = dataService.getData();



})
