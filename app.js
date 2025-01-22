const main = document.querySelector('.ll-header');
let threshold = 30;
let hiddenState = "-hidden", nav_dark = "page-header";
const contentContainer = document.querySelector('.main--json-content');
const triggers = document.querySelectorAll('.category-selections li a');
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
