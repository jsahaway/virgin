import "../css/normalize.css";
import "../css/base.css";
import "../css/bs.grid.min.css";
import "../css/bloc.css";
import "../css/color.css";
import "../css/border.css";
import "../css/text.css";
import "../css/icon.css";
import "../css/brand.css";
import "../css/badge.css";
import "../css/form.css";



// window.addEventListener("resize", e => {
//   import(/* webpackChunkName: "section" */ "./section").then(module => {
//     const m = module.default;
//     m.update();
//   });
//   import(/* webpackChunkName: "menu" */ "./menu").then(module => {
//     const m = module.default;
//     m.onResize();
//   });
// });

window.addEventListener("scroll", e => {
  window.requestAnimationFrame(() => {
    import(/* webpackChunkName: "lazyloading" */ "./lazyloading").then(module => {
      module.default();
    });
    import(/* webpackChunkName: "googlemaps" */ "./googlemaps");
    import(/* webpackChunkName: "section" */ "./section").then(module => {
      const m = module.default;
      m.update();
    });
    import(/* webpackChunkName: "menu" */ "./menu").then(module => {
      const m = module.default;
      m.onScroll();
    });
    import(/* webpackChunkName: "transition" */ "./transition").then(module => {
      const m = module.default;
      m.onScroll();
    });
    import(/* webpackChunkName: "dropdown" */ "./dropdown");
    import(/* webpackChunkName: "copy" */ "./afc").then(module => {
      const m = module.default;
      m.onLoad();
    });
  });
});

import(/* webpackChunkName: "lazyloading" */ "./lazyloading").then(module => {
  module.default();
});
// import(/* webpackChunkName: "mail" */ "./mail");
import(/* webpackChunkName: "section" */ "./section").then(module => {
  const m = module.default;
  m.update();
});
import(/* webpackChunkName: "menu" */ "./menu").then(module => {
  const m = module.default;
  m.onLoad();
});
import(/* webpackChunkName: "transition" */ "./transition").then(module => {
  const m = module.default;
  m.onLoad();
  m.onScroll();
});
import(/* webpackChunkName: "ripple" */ "./ripple").then(module => {
  const m = module.default;
  m.onLoad();
});

// AFC.onResize();
// Section.update();
// Menu.onResize();

// AFC.onLoad();
// Section.update();
// Menu.onLoad();
// Ripple.onLoad();
// Trans.onLoad();
// Trans.onScroll();
// Copy.onLoad();

// AFC.onScroll();
// Section.update();
// Menu.onScroll();
// Trans.onScroll();
