let setLeft = 0;
const sliderLine = document.querySelector('.slider__line');
const btnNext = document.querySelector('.slider__next');
const btnPrev = document.querySelector('.slider__prev');

const images = [
  '../assets/images/photo-1523805009345-7448845a9e53.jpeg',
  '../assets/images/photo-1570558997843-67c928515ad4.jpeg',
  '../assets/images/photo-1636233636680-d2a0aca610d4.jpeg',
  '../assets/images/photo-1636334265407-97ea707f856c.jpeg',
  '../assets/images/photo-1636962027983-500f19243325.jpeg',
];

const imagesLength = images.length;
const imageWidth = 550;
const imageHeight = 350;

images.forEach((elem) => {
  const img = new Image(imageWidth, imageHeight);
  img.src = elem;
  sliderLine.appendChild(img);
});

btnNext.addEventListener('click', () => {
  setLeft += imageWidth;
  if (setLeft > imageWidth * (imagesLength - 1)) {
    setLeft = 0;
  }
  sliderLine.style.left = `${-setLeft}px`;
});

btnPrev.addEventListener('click', () => {
  setLeft -= imageWidth;
  if (setLeft < 0) {
    setLeft = imageWidth * (imagesLength - 1);
  }
  sliderLine.style.left = `${-setLeft}px`;
});
