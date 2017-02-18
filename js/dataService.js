angular.module('app').service('dataService',function(){

  var thisUser = [
    {
      name:"",
      tagline:"",
      profileimage: "",
      bio: "",
    }
  ]

  var userData = [
    {
      name: "Beth Rogers",
      tagline: "I'm the beth!",
      profileimage: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg",
      bio: "this is my fake profile! Thanks for chcking it out"
    },
    {
      name: "Ash Ketchum",
      tagline: "Gotta catch 'em all!'",
      profileimage: "https://s3.amazonaws.com/uifaces/faces/twitter/chadengle/128.jpg",
      bio: "Born in Pallet Town, I hunt for pokemon everyday!"
    },
    {
      name: "He Man",
      tagline: "I have the power!",
      profileimage: "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
      bio: "By the power of Greyskull, I dont know anything about He Man!"
    },
    {
      name: "Bugs Bunny",
      tagline: "Ehh, What's up, Doc?",
      profileimage: "https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg",
      bio: "Just a talking, anthropomorphic rabbit with a habit of cross-dressing."
    },
    {
      name: "Wally West",
      tagline: "Fastest Man Alive",
      profileimage: "https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg",
      bio: "I'm kind of a big deal. but seriously."
    },
    {
      name: "Bruce Wanyne",
      tagline: "Just a billionaire playboy and for sure not The Batman",
      profileimage: "https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg",
      bio: "Hobbies include womanizing, getting drunk, spending money, and not fighting crime."
    },
  ]

this.getData = function(){
  return userData;
}

this.getUser = function(){
  return thisUser;
}

this.addData = function(data) {
  if(data.name && data.tagline && data.profileimage && data.bio){
    thisUser.name = data.name;
    thisUser.tagline = data.tagline;
    thisUser.profileimage = data.profileimage;
    thisUser.bio = data.bio;
    return true;
  }
}

this.updateUser = function(data) {
  if(data.name){thisUser.name = data.name};
  if(data.tagline){thisUser.tagline = data.tagline};
  if(data.profileimage){thisUser.profileimage = data.profileimage};
  if(data.bio){thisUser.bio = data.bio};
  return true;
  }


})
