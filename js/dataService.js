angular.module('app').service('dataService',function(){
  var userData = [
    {
      name: "test name",
      tagline: "test tagline",
      profileimage: "testimageurl",
      bio: "test bio"
    }
  ]

this.getData = function(){
  return userData;
}

this.addData = function(data) {
  if(data.name && data.tagline && data.profileimage && data.bio){
    userData.push(data);
    return true;
  }
}


})
