angular.module('app').controller('friendSearchCtrl', function($scope, dataService){
  $scope.userData = dataService.getData();

$scope.test = function(event){
  console.log(event.target.id) ;
};


})
