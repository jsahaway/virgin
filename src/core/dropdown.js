import "../css/trig.css";

let dropDown = document.getElementsByClassName("trig");

for (let i = 0, iMax = dropDown.length; i < iMax; i++) {
  let trig = dropDown[i];
  let trigBtnList = trig.getElementsByClassName("trig-btn");
  let trigContentList = trig.getElementsByClassName("trig-content");

  for (let j = 0, jMax = trigBtnList.length; j < jMax; j++) {
    if (j) {
      trigContentList[j].classList.add("trig-content-hide");
      trigContentList[j].style.borderTop = "none";
    }

    trigBtnList[j].addEventListener("click", e => {
      showHide(trigContentList, j);
    });
  }
}

let showHide = (trigContentList, j) => {
  trigContentList[j].classList.remove("trig-content-hide");
  trigContentList[j].style = "";

  for (let k = 0, kMax = trigContentList.length; k < kMax; k++) {
    if (k !== j) {
      trigContentList[k].classList.add("trig-content-hide");
      setTimeout(() => {
        trigContentList[k].style.borderTop = "none";
        if (k !== kMax - 1 && k !== j) trigContentList[k].style.borderBottom = "none";
      }, 400);
    }
  }
};

export default {};
