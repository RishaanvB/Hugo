const toggleMenu = document.querySelector(".toggle-menu");
const fadeElements = document.querySelectorAll(".onload");
window.addEventListener("scroll", animateImagesOnDisplay);
const questions = document.querySelectorAll(".faq-container__aq-block ");
const galleryImages = document.querySelectorAll(
  ".gallery-container__img-container"
);

// collapse navbar on specified scrollbar position.
window.addEventListener("scroll", () => {
  const navBar = document.getElementById("navbar");
  const toggleMenu = document.querySelector(".toggle-menu");

  if (window.scrollY > 700) {
    navBar.style = "padding: 5px 30px";
    toggleMenu.style = "top: 8px";
  } else if (window.scrollY < 500) {
    navBar.style = "padding: 20px 30px";
    toggleMenu.style = "top: 20px";
  }
});

// handles clickable hamburger menu
toggleMenu.addEventListener("click", () => {
  const navList = document.querySelector(".navbar__links");
  navList.classList.toggle("menu-open");
});

// fading in opacity for landing page
fadeElements.forEach((element) => element.classList.add("fade-onload"));

// handles animation on scroll for phase section images
function animateImagesOnDisplay() {
  const elToFadeIn = document.querySelectorAll(".fade-in");
  const scrollTrigger = (window.innerHeight / 100) * 99;
  elToFadeIn.forEach((elToFadeIn) => {
    const topOfEl = elToFadeIn.getBoundingClientRect().top;
    topOfEl < scrollTrigger
      ? elToFadeIn.classList.add("fade-onscroll")
      : elToFadeIn.classList.remove("fade-onscroll");
  });
}

window.addEventListener("load", () => {
  console.log("window loaded");
});

// handles collapsable questions in faq.html
questions.forEach((question) => {
  question.addEventListener("click", () => {
    const block = question.parentNode;
    console.log(block);
    question.classList.toggle("display-question");
    const answer = question.childNodes[5];
    const chevron = question.childNodes[1];
    answer.classList.toggle("display-question");
    chevron.classList.toggle("display-question");
  });
});

const showModal = (e) => {
  const modal = document.getElementById("modal-background");
  modal.style.display = "flex";

  const close = document.getElementById("close-modal");
  const chevronRight = document.querySelector(".fa-chevron-right");
  const chevronLeft = document.querySelector(".fa-chevron-left");
  const modalImg = document.getElementById("modal-img");
  const figcaptionEl = document.getElementById("modal-content__figcaption");
  const images = Array.from(
    document.querySelectorAll(".gallery-container__img")
  );
  let indexOfSelectedImage = images.findIndex(
    (image) => image.src === e.target.src
  );
  let imgSrc = images[indexOfSelectedImage].src;
  modalImg.src = imgSrc;
  const imagesGalleryLength = images.length - 1;

  const imgFigcaptionHtml =
    images[indexOfSelectedImage].nextElementSibling.innerHTML;
  figcaptionEl.innerHTML = imgFigcaptionHtml;

  const closeModal = () => (modal.style.display = "none");
  close.addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => {
    e.key === "Escape" && closeModal();
  });

  window.addEventListener("keydown", (e) => {
    e.key === "ArrowRight" && getNextImage();
    e.key === "ArrowLeft" && getPreviousImage();
  });

  const getNextImage = () => {
    indexOfSelectedImage == imagesGalleryLength
      ? (indexOfSelectedImage = 0)
      : ++indexOfSelectedImage;
    imgSrc = images[indexOfSelectedImage].src;
    modalImg.src = imgSrc;
    const imgFigcaptionHtml =
      images[indexOfSelectedImage].nextElementSibling.innerHTML;
    figcaptionEl.innerHTML = imgFigcaptionHtml;
  };

  const getPreviousImage = () => {
    indexOfSelectedImage == 0
      ? (indexOfSelectedImage = imagesGalleryLength)
      : --indexOfSelectedImage;
    imgSrc = images[indexOfSelectedImage].src;
    modalImg.src = imgSrc;
    const imgFigcaptionHtml =
      images[indexOfSelectedImage].nextElementSibling.innerHTML;
    figcaptionEl.innerHTML = imgFigcaptionHtml;
  };

  chevronRight.addEventListener("click", getNextImage);
  chevronLeft.addEventListener("click", getPreviousImage);
};
galleryImages.forEach((image) => image.addEventListener("click", showModal));

// handles fading out for sections on how-it-grows.html

const changePosTop = () => {
  const element = document.getElementById("fader1");
  const nextSibling = document.getElementById("fader2");
  const scrollbar = window.scrollY;
  const elementBottom = element.getBoundingClientRect().bottom;
  const nextSiblingTop = nextSibling.getBoundingClientRect().top;
  let distance = Math.floor(nextSiblingTop - elementBottom);
  distance = distance;
  console.log(distance);
  if (distance < 300) {
    console.log("distance < 300");
  }
};

// handles switches between img bg in how-it-grows.html

const switchBackground = () => {
  const scrollLimit =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollbar = window.scrollY;
  const scrollbarPosition = (scrollbar / scrollLimit) * 100;

  const firstBg = document.getElementById("first-bg");
  const secondBg = document.getElementById("second-bg");
  const thirdBg = document.getElementById("third-bg");

  if (scrollbarPosition >= 0) {
    firstBg.classList.add("active-bg");
    secondBg.classList.remove("active-bg");
    thirdBg.classList.remove("active-bg");
  }
  if (scrollbarPosition >= 30) {
    secondBg.classList.add("active-bg");
    firstBg.classList.remove("active-bg");
    thirdBg.classList.remove("active-bg");
  }
  if (scrollbarPosition >= 55) {
    thirdBg.classList.add("active-bg");
    firstBg.classList.remove("active-bg");
    secondBg.classList.remove("active-bg");
  }
};
window.addEventListener("scroll", switchBackground);

console.log("end of script.js");
