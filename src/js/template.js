import $ from "jquery";

function writeCard(infoObject){
/*
  infoObject.name
  infoObject.gitUrl
  infoObject.email
  infoObject.company
  infoObject.website
*/
$(".container").append(`
  <div class="box">
    <div class="top-section">
    Your name
    </div>

    <article class="media">

      <div class="media-content">
        <div class="content">
          <p>
            <strong>The Basics</strong>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          </p>
        </div>
      </div>

      <div class="media-content">
        <div class="content">
          <p>
            <strong>The Story</strong>
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          </p>
        </div>
      </div>

      <div class="media-right">
        <figure class="image is-64x64">
          <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
        </figure>
      </div>

    </article>
  </div>




  `);

}

export { writeCard }
