const contentContainer = document.querySelector('.main--json-content');
const triggers = document.querySelectorAll('.category-selections li a');
//const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)$/gi
const main = document.querySelector('.ll-header');

let links = document.querySelectorAll('.link--sections .link a');
let hiddenState = "-hidden";
let nav_dark = "page-header";

let threshold = 30;
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
