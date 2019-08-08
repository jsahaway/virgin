import "../css/menu.css";
import Section from "./section.js";

let Menu = {};
let arrowBottom = document.getElementById("arrow-bottom");
let arrowBottomClick = document.getElementById("arrow-bottom-click");
let footer = document.getElementsByTagName("footer")[0];
let elUnderline = document.getElementsByClassName("underline")[0];
let navMenu = document.querySelectorAll("nav > a");

const underline = () => {
  let i = Section.getIndexId() || 0;
  let navMenuA = navMenu[i];
  const coords = navMenuA.getBoundingClientRect();
  elUnderline.children[0].style.left = `${coords.left - 5 + coords.width / 2}px`;
};

arrowBottomClick.addEventListener("click", e => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

const arrow = () => {
  const height = window.innerHeight;
  const bottom = window.pageYOffset + height;
  if (bottom >= footer.offsetTop + 20) {
    arrowBottom.style.transition = "none";
    arrowBottom.style.top = `${height - (arrowBottom.offsetHeight - 10) - (bottom - footer.offsetTop)}px`;
  } else if (window.pageYOffset >= 200) {
    arrowBottom.style.transition = "top 0.3s";
    arrowBottom.style.top = `${height - arrowBottom.offsetHeight - 20}px`;
  } else {
    arrowBottom.style.top = `${height}px`;
  }
};

let icon = () => {
  let iconList = document.querySelectorAll("a.navbar_item > .icon");
  iconList.forEach(iconNavBar => {
    iconNavBar.style.display = window.innerWidth < 768 ? "block" : "none";
  });
};

Menu.onLoad = () => {
  // arrow();
  underline();
  icon();
};

Menu.onScroll = () => {
  arrow();
  underline();
};

Menu.onResize = () => {
  icon();
  arrow();
  underline();
};

export default Menu;
