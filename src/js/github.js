
import $ from "jquery";
import {writeCard} from "./template"
//var BASE_URL = "https://api.github.com";

function getUser () {
  return $.ajax({
    url: `https://api.github.com/users/farstrider777`,
    dataType: "json",
    //headers: {
    //  "Authorization": `token ${GH_TOKEN}`
  //  }
  });
}

var infoObject = {name: 0, login: 0, email: 0,
  company: 0, blog: 0, bio: 0, pic: 0, hurl: 0};

function info(data, success, xmlobject){
  console.log(data);
  console.log(success);
  console.log(xmlobject);
  console.log(data.name);
  console.log(data.login);
  console.log(data.email);
  console.log(data.company);
  console.log(data.blog);
  infoObject.name = data.name;
  infoObject.login = data.login;
  infoObject.email = data.email;
  infoObject.company = data.company;
  infoObject.blog = data.blog;
  infoObject.bio = data.bio;
  infoObject.pic = data.avatar_url;
  infoObject.hurl = data.html_url;

  writeCard(infoObject);
}

export { info, getUser }
