const html = document.querySelector("html");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);


const themes = [
  {
    borderImg: 'url("img/ff-theme/border-image_ff.png")',
    bgColor: "linear-gradient(to bottom right, #466bfa, #00008b) repeat repeat",
    progressbarLeft: 'url("img/ff-theme/progress-bar-left-ff.png")',
    progressbarRight: 'url("img/ff-theme/progress-bar-right-ff.png")',
    progressbarMiddle: 'url("img/ff-theme/progress-bar-track-ff.png")',
  },

  {
    borderImg: 'url("img/border-image.png")',
    bgColor: "#4e4a4e",
    progressbarLeft: 'url("img/progress-bar-left.png")',
    progressbarRight: 'url("img/progress-bar-right.png")',
    progressbarMiddle: 'url("img/progress-bar-track.png")',
  },
];
const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

changeColors(themes[1])