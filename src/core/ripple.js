import "../css/ripple.css";

let Ripple = {};
Ripple.onLoad = () => {
  let el = document.querySelectorAll("[data-ripple]");
  let i = 0;
  const iMax = el.length;

  for (; i < iMax; ++i) {
    let elRipple = el[i];

    elRipple.addEventListener("click", e => {
      if (elRipple.closest("[data-ripple]")) {
        e.stopPropagation();
      }

      let initPos = elRipple.style.getPropertyValue("position"),
        x = e.offsetX,
        y = e.offsetY,
        dia = Math.min(elRipple.offsetHeight, elRipple.offsetWidth, 100), // start diameter
        ripple = document.createElement("div");
      ripple.classList.add("ripple");

      if (!initPos || initPos === "static") {
        elRipple.style.position = "relative";
      }

      let rippleWave = document.createElement("div");
      rippleWave.classList.add("rippleWave");

      rippleWave.style.background = elRipple.dataset.ripple;
      rippleWave.style.top = `${y - dia / 2}px`;
      rippleWave.style.left = `${x - dia / 2}px`;
      rippleWave.style.width = `${dia}px`;
      rippleWave.style.height = `${dia}px`;

      ripple.appendChild(rippleWave);
      elRipple.appendChild(ripple);

      rippleWave.addEventListener(
        "animationend",
        e => {
          elRipple.removeChild(ripple);
        },
        false
      );
    });
  }
};

export default Ripple;
