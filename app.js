const contentContainer = document.querySelector('.main--json-content');
const triggers = document.querySelectorAll('.category-selections li a');
const main = document.querySelector('.ll-header');

let links = document.querySelectorAll('.link--sections .link a');
let hiddenState = "-hidden";
let nav_dark = "page-header";

let threshold = 30;
var uBound = 7, 
    position = 0, 
    lastScroll = 0, 
    n_event = 0;

// let jsonData = [
//         {
//             "url": "https://www.joshwcomeau.com/animation/keyframe-animations/",
//             "title": "An Interactive Guide to Keyframe Animations",
//             "desc": "CSS keyframe animations are awesome. They're one of the most powerful, versatile tools in CSS, and we can use them for all sorts of nifty things.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/Current/glasper-1000x667_m98BNLRUWh.jpg",
//             "tag": "CSS"
//         },
//         {
//             "url": "https://scottjehl.com/posts/using-responsive-video/",
//             "title": "How to Use Responsive HTML Video (...and Audio!)",
//             "desc": "In case you haven't already heard, you can use media queries for delivering HTML video again!",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/Current/glasper-1000x667_m98BNLRUWh.jpg",
//             "tag": "CSS"
//         },
//         {
//             "url": "https://ryanmulligan.dev/blog/some-things-about-keyframes/",
//             "title": "Some Things About Keyframes",
//             "desc": "Whether you've barely scratched the surface of keyframe animations in CSS or fancy yourself a seasoned pro, I suggest reading An Interactive Guide to Keyframe Animations.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/Current/glasper-1000x667_m98BNLRUWh.jpg",
//             "tag": "CSS"
//         },
//         {
//             "url": "https://jsdev.space/10-css-tips/",
//             "title": "CSS Tips You Must Know About",
//             "desc": "Staying up to date with the latest trends and best practices is essential. Here are 10 CSS tips you must know about in 2024 to enhance your web development skills and create cutting-edge designs.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/129480830_2870084836553959_2035561098756143742_n_jOWu39x5bn.jpg",
//             "tag": "CSS"
//         },
//         {
//             "url": "https://jsdev.space/howto/understand-binding-types/",
//             "title": "Understand Binding Types in JavaScript: A Complete Guide",
//             "desc": "Understanding how this works in JavaScript is critical to mastering the language. JavaScript provides four primary ways to bind the this keyword within a function.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/jamila-woods-by-bradley-murray-12_Fyyu9YHRD.jpg",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://jsdev.space/howto/invoked-fns-js/",
//             "title": "Immediately Invoked Functions and this in JavaScript",
//             "desc": "This guide covers the basics of JavaScript's immediately invoked function expressions (IIFE), object handling, memory allocation, and the use of this in object-oriented programming.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/optional-chaining_pi86_Am08nA.jpg",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://jsdev.space/inheritance-js/",
//             "title": "Deep Dive into JavaScript Inheritance - 7 Powerful Techniques",
//             "desc": "In JavaScript, inheritance is an essential way to reuse code and manage complex object relationships. With its prototype-based model, JavaScript has several inheritance patterns, each offering unique benefits.",
//             "imgUrl": "https://jsdev.space/static/3893458614a0389e9f8f2cbec1f90f2c/658d1/inheritance-js.webp",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://jsdev.space/file-blob-js/",
//             "title": "Understanding the Difference Between File and Blob Objects",
//             "desc": "In JavaScript, both File and Blob objects are used to represent binary data, but they serve different purposes and have some distinct characteristics. Here’s a breakdown of their differences.",
//             "imgUrl": "https://jsdev.space/static/c1a94780b66212420ce00fbc4eddd8ea/be304/file-blob-js.webp",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://www.freecodecamp.org/news/guide-to-javascript-promises/",
//             "title": "How Promises Work in JavaScript – A Comprehensive Guide",
//             "desc": "There are a few asynchronous features in JavaScript, and one of them is Promises.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_kCDwU9HP6PHbo_joE0JKHQ_82qCSbjSa.png",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://zellwk.com/blog/callbacks/",
//             "title": "Callbacks in JavaScript",
//             "desc": "Have you come across the term “callback” but don’t know what it means? Don’t worry, you’re not alone. That’s what today’s article is for! You’ll learn what callbacks are, why they’re important, and how to use them.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/bg_RMdr1Of2k.jpeg",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://ishadeed.com/article/clip-path/",
//             "title": "Understanding Clip Path in CSS",
//             "desc": "A clear explanation of how `clip-path` works in detail when to use it, and how you can use it today in your web development projects.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/bg_RMdr1Of2k.jpeg",
//             "tag": "CSS"
//         },  
//         {
//             "url": "https://css-tricks.com/using-requestanimationframe/",
//             "title": "Using requestAnimationFrame",
//             "desc": "There used to be just one way to do a timed loop in JavaScript: setInterval(). The goal is sixty “frames” per second to appear smooth.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_ge4CGKfh7VIqIgk7_WpbZXfAGY.png",
//             "tag": "Javascript"
//         },

//         {
//             "url": "https://medium.com/@Flowmapp/progressive-disclosure-10-great-examples-to-check-5e54c5e0b5b6",
//             "title": "Progressive Disclosure: Great Examples",
//             "desc": "When an interface is complex enough for users to understand it right, designers need to look for unique ways to present its functionality.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/The%20Work/c0v-members/alien-passion_d9lUYaQKa_yzSnkGEwki.jpg",
//             "tag": "UI/UX"
//         },

//         {
//             "url": "https://elijahmanor.com/blog/format-js-dates-and-times",
//             "title": "Natively Format JavaScript Dates and Times",
//             "desc": "It's interesting to note that native browser capabilities are pretty capable these days when formatting dates and times, and the browser support is quite impressive too!",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/bg_RMdr1Of2k.jpeg",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://dev.to/remrkabledev/nesting-template-literals-a-recommended-approach",
//             "title": "Nesting Template Literals: A Recommended Approach",
//             "desc": "Code quality is essential, as it impacts the overall software quality. In consequence, software quality affects the safety, security, and reliability of any codebase.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/r0t-031c9650_oFvUux3-q_zOasSqqqf.jpg",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://wesbos.com/template-strings-html",
//             "title": "Creation of HTML with JavaScript’s Template Strings",
//             "desc": "Another feature of _template literals_ or template strings is the ability have multi-line strings without any funny business.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_fX1vRVMR8F7jiHGzPyRv7Q_lY8mSsVMg.png",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://mastery.games/post/overlapping-grid-items/",
//             "title": "Overlapping Grid Items",
//             "desc": "Now that CSS Grid has arrived, we're starting to see more and more magazine style layouts on the web. And for good reason.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/Artists/cbc029ab57a8495195bf6b4061e2cb2f_Qgk527FNL.jpg",
//             "tag": "Grid"
//         },
//         {
//             "url": "https://elijahmanor.com/blog/reducing-filter-and-map-down-to-reduce",
//             "title": "Reducing Filter and Map Down to Reduce",
//             "desc": "You've probably seen some of the new array methods in ECMAScript 5 (ES5) and you may have even used some of them before.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/0_YmsNE0ZfkcrF6TvE_D9kltAo_e.png",
//             "tag": "Javascript"
//         },
//         {
//             "url": "https://css-tricks.com/the-sass-ampersand/",
//             "title": "The Sass Ampersand",
//             "desc": "The & is an extremely useful feature in Sass (and Less). It’s used when nesting. It can be a nice time-saver when you know how to use it.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/The%20Work/c0v-members/pexels-freestocksorg-64057_y4EMJcpg0.jpg",
//             "tag": "CSS"
//         },
//         {
//             "url": "https://dev.to/babichweb/accordion-tabs-with-pure-css-35ji",
//             "title": "Accordion Tabs with pure CSS",
//             "desc": "This is yet another “article” about how amazing pure CSS is, and how you can do something cool without a single line of JavaScript. Why do I bother to write it? Because I am still fascinated by how amazing pure CSS is.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_fX1vRVMR8F7jiHGzPyRv7Q_lY8mSsVMg.png",
//             "tag": "CSS"
//         },
//         {
//             "url": "https://medium.com/mirum-budapest/back-to-the-basics-accordions-5aab4a678b3b",
//             "title": "Back to the Basics: Accordions",
//             "desc": "Creating accordions from scratch. Accordions can be very helpful when a page has a lot of content. They let the user scan through the headings and effectively open their content without redirecting them to a new page.",
//             "imgUrl": "https://ik.imagekit.io/ghow2otb3rc/Projects/SoM/cdn/1_fX1vRVMR8F7jiHGzPyRv7Q_lY8mSsVMg.png",
//             "tag": "Javascript"
//         }
// ];

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

links.forEach((link) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    contentContainer.innerHTML = '';
    let articleTag = link.textContent;
    // jsonData.filter(entry => entry.tag === articleTag).map(function(entry) {
    //   console.log(entry.tag);
    // });
    jsonData.filter(entry => entry.tag === articleTag).map(fillContainer).join('');
  });
});

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
