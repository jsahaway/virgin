import "../css/section.css";

let Section = {};
let _indexId = null;
const sectionList = document.querySelectorAll("[data-section-index]");
const iMax = sectionList.length;

let setIndex = () => {
  let i = 0;
  for (; i < iMax; ++i) {
    let section = sectionList[i];
    let sectionYTop = section.offsetTop;
    if (sectionYTop <= window.pageYOffset + 100) {
      _indexId = i;
    } else {
      continue;
    }
  }
};

Section.getIndexId = () => {
  return _indexId;
};

Section.update = str => {
  setIndex();
};

export default Section;
