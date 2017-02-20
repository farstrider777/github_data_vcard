
import $ from "jquery";
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



function info(data, success, xmlobject){
  console.log(data);
  console.log(success);
  console.log(xmlobject);
  console.log(data.name);
  console.log(data.login);
  console.log(data.email);
  console.log(data.company);
  console.log(data.blog);

}

export { info, getUser }
