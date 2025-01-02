const contentContainer = document.querySelector('.main--json-content');
const triggers = document.querySelectorAll('.category-selections li a');
const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/gi

let links = document.querySelectorAll('.link--sections .link a');

let jsonData = [
        {
            "url": "https://lifeomic.github.io/chromicons.com/",
            "title": "HANDCRAFTED OPEN SOURCE ICONS",
            "desc": "Ready to use in web, iOS, Android, and desktop apps. Support for SVG and web font.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/The%20Work/c0v-members/pexels-freestocksorg-64057_y4EMJcpg0.jpg",
            "tag": "Utils"
        },
        {
            "url": "https://medium.com/@Flowmapp/progressive-disclosure-10-great-examples-to-check-5e54c5e0b5b6",
            "title": "Progressive Disclosure: Great Examples",
            "desc": "When an interface is complex enough for users to understand it right, designers need to look for unique ways to present its functionality.",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/The%20Work/c0v-members/alien-passion_d9lUYaQKa_yzSnkGEwki.jpg",
            "tag": "UI/UX"
        },
        {
            "url": "https://elijahmanor.com/blog/format-js-dates-and-times",
            "title": "Natively Format JavaScript Dates and Times",
            "desc": "It's interesting to note that native browser capabilities are pretty capable these days when formatting dates and times, and the browser support is quite impressive too!",
            "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/bg_RMdr1Of2k.jpeg",
            "tag": "Javascript"
        }
];

// for (let x = 0; x < jsonData.length; x++) {
//   let { url, title, desc, imgUrl } = jsonData[x];
//   console.log(url);
// }

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
  contentContainer.innerHTML = '';
  let { url, title, desc, imgUrl } = displaySection;
  console.log(url);
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
    let articleTag = link.textContent;
    // console.log(articleTag);
    // jsonData.filter(entry => entry.tag === articleTag).map(function(entry) {
    //   console.log(entry.tag);
    // });
    jsonData.filter(entry => entry.tag === articleTag).map(fillContainer).join('');
  });
});
