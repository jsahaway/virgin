const lazyload = (fileName, el, type) => {
  if (el.getBoundingClientRect().top < window.innerHeight) {
    import(
      /* webpackMode: "lazy-once" */
      `../assets/${fileName}`
    )
      .then(src => {
        switch (type) {
          case 'svg':
            el.src = src.default;
            delete el.dataset.icon;
            break;
          case 'bg':
            el.style.background = `url('${src.default}')`;
            el.style.backgroundSize = 'cover';
            el.style.backgroundPosition = 'center';
            el.style.backgroundRepeat = 'no-repeat';
            delete el.dataset.bg;
            break;
          default:
            el.src = src.default;
            delete el.dataset.img;
        }
      })
      .catch(err => console.error(err));
  }
};

const getFiles = () => {
  const r = require.context('../assets', false, /\.(jpg|png|svg)$/);
  const importAll = r => r.keys().map(file => file.match(/[^\/]+$/)[0]);
  return importAll(r);
};
const fileList = getFiles();
// const fileList =[
//   '/bg1.png',
//   '/bg2.png',
//   '/fa-angle-up.svg',
//   '/fa-at.svg',
//   '/fa-clinic-medical.svg',
//   '/fa-clock.svg',
//   '/fa-copy.svg',
//   '/fa-envelope.svg',
//   '/fa-file-medical.svg',
//   '/fa-map-marker-alt.svg',
//   '/fa-map-pin.svg',
//   '/fa-phone.svg',
//   '/fa-question.svg',
//   '/fa-tooth.svg',
//   '/logo_ciotat_dentiste_400X400.png',
//   '/logo_full_ciotat_dentiste.png',
//   '/logo_teeth_ciotat_dentiste.png',
// ]
const imgList = document.querySelectorAll('[data-img]');
const bgList = document.querySelectorAll('[data-bg]');
const iconList = document.querySelectorAll('[data-icon]');

const filterByName = file => el => {
  return file.includes(el.dataset.img || el.dataset.bg || el.dataset.icon);
};

const init = () => {
  fileList.forEach(file => {
    const imgs = Array.from(imgList).filter(filterByName(file));
    imgs.forEach(el => lazyload(file, el, 'img'));
    const bgs = Array.from(bgList).filter(filterByName(file));
    bgs.forEach(el => lazyload(file, el, 'bg'));
    const icons = Array.from(iconList).filter(filterByName(file));
    icons.forEach(el => lazyload(file, el, 'svg'));
  });
};

export default init;
