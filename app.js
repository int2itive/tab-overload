const main = document.querySelector('.ll-header');
let threshold = 30;
let hiddenState = "-hidden", nav_dark = "page-header";
const contentContainer = document.querySelector('.main--json-content');
const triggers = document.querySelectorAll('.category-selections li a');
const ul = document.querySelector('.link--sections');
//const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/gi

let links = document.querySelectorAll('.link--sections .link a');

var uBound = 7, 
    position = 0, 
    lastScroll = 0, 
    n_event = 0;


window.addEventListener("scroll", function () {
  var position = window.scrollY || document.documentElement.scrollTop;

  if (position > threshold && position > lastScroll) {
    main.classList.add(hiddenState);
  } else {
    main.classList.remove(hiddenState);
    if (window.scrollY > 40) {
      main.classList.add(nav_dark);
    } else {
      main.classList.remove(nav_dark);
    }
  }

  lastScroll = position <= 0 ? 0 : position;

});

let insertCode = `
  <div class="tab--overload_wrap">
    <div class="tab--details-wrap">
      <div class="tab--image_wrap">
        <a class="custom--img_link">
          <img src="https://ik.imagekit.io/ghow2otb3rc/Projects/The%20Work/c0v-members/pexels-freestocksorg-64057_y4EMJcpg0.jpg" alt="" />
        </a>
      </div>
      <div class="tab--data_details">
        <h2 class="tab--article_title">
          <a href="#">Resources for Beautiful and Performant Websites</a>          
        </h2>
      </div>
    </div>
    <p class="tab--article_desc">Coding Heroes article of useful front deve utilities.</p>
  </div>
`;

function fillContainer (displaySection) {
  // contentContainer.innerHTML = '';
  let { url, title, desc, imgUrl } = displaySection;
  contentContainer.innerHTML += `
      <div class="tab--overload_wrap">
        <div class="tab--details-wrap">
          <div class="tab--image_wrap">
            <a class="custom--img_link">
              <img src="${imgUrl}" alt="" />
            </a>
          </div>
          <div class="tab--data_details">
            <h2 class="tab--article_title">
              <a href="${url}">${title}</a>          
            </h2>
          </div>
        </div>
        <p class="tab--article_desc">${desc}</p>
      </div>`;
}

links.forEach((link) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    contentContainer.innerHTML = '';
    let articleTag = link.textContent;
    ul.dataset.comment = `Current Links: ${articleTag}`;
    // jsonData.filter(entry => entry.tag === articleTag).map(function(entry) {
    //   console.log(entry.tag);
    // });
    jsonData.filter(entry => entry.tag === articleTag).map(fillContainer).join('');
  });
});
