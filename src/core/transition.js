import "../css/transition.css";

let Trans = {};
let g_textList = [];
let g_textListVec2 = [];
let g_i = 0;

Trans.onLoad = () => {
  g_textList = document.querySelectorAll("h1, h2, h3");
  for (let i = 0, len = g_textList.length; i < len; i++) {
    let el = g_textList[i];
    let text = el.innerText;
    el.innerText = "";
    Array.from(text).forEach(char => {
      let span = document.createElement("span");
      span.className = "letterSlideUp";
      span.innerText = `${char !== " " ? char : "\xa0"}`;
      el.appendChild(span);
    });
  }
  g_textList = document.querySelectorAll("h1 span, h2 span, h3 span, .icon-big, .badge, .logo-ui");

  for (let i = 0, len = g_textList.length; i < len; i++) {
    let el = g_textList[i];
    let arr = [];
    for (let j = i; j < len; j++) {
      let elNext = g_textList[j];
      if (el.getBoundingClientRect().bottom === elNext.getBoundingClientRect().bottom) {
        arr.push(elNext);
      } else {
        g_textListVec2.push(arr);
        i = j - 1;
        break;
      }
      if (j === len - 1) {
        i = j;
        g_textListVec2.push(arr);
      }
    }
  }
};

Trans.onScroll = () => {
  const winBottom = window.innerHeight;
  for (let i = g_i, len = g_textListVec2.length; i < len; i++) {
    let arr = g_textListVec2[i];
    let el = arr[0];

    const coord = el.getBoundingClientRect();
    let coordCompare = coord.bottom;
    if (coord.height > 400) {
      coordCompare = coord.top;
    }

    if (coordCompare < winBottom) {
      g_i = i;
      for (let j = 0, lenJ = arr.length; j < lenJ; j++) {
        let elJ = arr[j];
        setTimeout(() => {
          elJ.style.transform = "translateY(0)";
          elJ.style.opacity = 1;
        }, j * 35);
      }
    }
  }
};

export default Trans;
