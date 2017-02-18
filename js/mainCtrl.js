angular.module('app').controller('mainCtrl', function($state, $stateParams, $scope, $location, dataService){

$scope.userData = dataService.getData();
$scope.thisUser = dataService.getUser();

$scope.userAdd = function(){
  var newUser = {
    name: $scope.name,
    tagline: $scope.tagline,
    profileimage:$scope.profileimage,
    bio: $scope.bio,
  }
  if(dataService.addData(newUser))
    {
      // $location.url('/searchfriends');
      $scope.name = '';
      $scope.tagline = '';
      $scope.profileimage = '';
      $scope.bio = '';

    }
}

// $scope.go = function ( path ) {
//   $location.url( path );
// };


  })
