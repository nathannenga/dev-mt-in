angular.module('app').controller('mainCtrl', function($scope, dataService){

$scope.userData = dataService.getData();

$scope.userAdd = function(){
  var newUser = {
    name: $scope.name,
    tagline: $scope.tagline,
    profileimage:$scope.profileimage,
    bio: $scope.bio,
  }
  if(dataService.addData(newUser))
    {
      $scope.name = '';
      $scope.tagline = '';
      $scope.profileimage = '';
      $scope.bio = '';

    }
}

  })
