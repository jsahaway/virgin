let AFC = {
  author: "Jonathan Attar",
  linkedin: "",
  winWidth: window.innerWidth,
  winHeight: window.innerHeight,
  winYBottom: window.pageYOffset + window.innerHeight,
  winYTop: window.pageYOffset,
  color: ["#fff", "#DBE5FF", "#6bead1", "#0247FE", "#012998", "#091534"],
  scrollDown: false
};

const winCoord = () => {
  AFC.winWidth = window.innerWidth;
  AFC.winHeight = window.innerHeight;
  AFC.winYBottom = window.pageYOffset + window.innerHeight;
  AFC.winYTop = window.pageYOffset;
};

let g_lastScroll = 0;
const scrollListener = () => {
  let currentScroll = AFC.winYTop;
  let scroll = false;
  if (currentScroll > g_lastScroll) {
    scroll = true;
  } else {
    scroll = false;
  }
  g_lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  AFC.scrollDown = scroll;
};


AFC.onResize = () => {
  winCoord();
};

AFC.onScroll = () => {
  winCoord();
  scrollListener();
};

AFC.onLoad = () => {
  winCoord();
  scrollListener();
};

export default AFC;
