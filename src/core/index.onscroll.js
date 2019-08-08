window.addEventListener("scroll", e => {
  import(/* webpackChunkName: "googlemaps" */ "./googlemaps");
  window.requestAnimationFrame(() => {
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
  });
});
