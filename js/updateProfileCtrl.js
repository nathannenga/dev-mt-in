angular.module('app').controller('updateProfileCtrl', function($scope, dataService){
  $scope.userData = dataService.getData();
  $scope.thisUser = dataService.getUser();

  $scope.updateUser = function(){
    var newUser = {
      name: $scope.name,
      tagline: $scope.tagline,
      profileimage:$scope.profileimage,
      bio: $scope.bio,
    }
    if(dataService.updateUser(newUser))
      {
        // $location.url('/searchfriends');
        $scope.name = '';
        $scope.tagline = '';
        $scope.profileimage = '';
        $scope.bio = '';

      }
  }


})
