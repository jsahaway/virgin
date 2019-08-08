import "../css/copy.css";

let Copy = {};
let btnCopyList = document.querySelectorAll("[data-copy-btn]");
let dataCopyList = document.querySelectorAll("[data-copy]");
let tooltip = document.getElementById("tooltip");

Copy.onLoad = () => {

  btnCopyList.forEach((btn, i) => {
    btn.style.cursor = "pointer";
    btn.addEventListener("click", () => {
      const coord = btn.getBoundingClientRect();
      tooltip.style.top = coord.bottom + 5 + "px";
      tooltip.style.left = coord.left + coord.width / 2 - 75 / 2 + "px";
      tooltip.style.opacity = 1;

      setTimeout(() => {
        tooltip.style.opacity = 0;
      }, 800);
      const str = dataCopyList[i].innerText;
      function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
      }
      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);
    });
  });
};

export default Copy;
