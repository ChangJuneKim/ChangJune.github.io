const body = document.querySelector("body");

const IMG_NUM = 6;

function handleImgLoad() {
  console.log("finished laoding");
}

function paintImage(imgNum) {
  const image = new Image();
  image.src = `img/${imgNum + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
