import $ from "jquery";
//import { infoObject } from "./github";

function writeCard(infoObject2){
/*
  infoObject.name
  infoObject.gitUrl
  infoObject.email
  infoObject.company
  infoObject.website
  ${infoObject.name}
*/
console.log(infoObject2.name);

$(".container").append(`
  <div class="box">
    <div class="top-section">
    ${infoObject2.name}
    </div>

    <article class="media">

      <div class="media-content">
        <div class="content" id="box1">
          <p>
            <strong>The Basics</strong>
            <br>
            <div><span>Name:</span> ${infoObject2.name}</div>
            <div><span>Github URL:</span><a href="${infoObject2.hurl}"> ${infoObject2.login}</a></div>
            <div><span>Email:</span>  ${infoObject2.email}</div>
            <div><span>Company:</span>  ${infoObject2.company}</div>
            <div><span>website:</span><a href="${infoObject2.blog}"> My Blog</a></div>

          </p>
        </div>
      </div>

      <div class="media-content">
        <div class="content">
          <p>
            <strong>The Story</strong>
            <br><br>
            ${infoObject2.bio}
          </p>
        </div>
      </div>

      <div class="media-right">

          <img src="${infoObject2.pic}" alt="Image">

      </div>

    </article>
  </div>




  `);

}

export { writeCard }
