const toggleMenu = document.querySelector(".toggle-menu");
const fadeElements = document.querySelectorAll(".onload");
window.addEventListener("scroll", animateImagesOnDisplay);
const questions = document.querySelectorAll(".faq-container__aq-block ");
const galleryImages = document.querySelectorAll(
  ".gallery-container__img-container"
);
// animates navbar into view
const navbar = document.querySelector("#navbar");
navbar.classList.add("navbar-animate-onload");

// collapse navbar on specified scrollbar pos.
window.addEventListener("scroll", () => {
  const navBar = document.getElementById("navbar");
  const shopBtn = document.getElementById("nav-shop-btn");
  const toggleMenu = document.querySelector(".toggle-menu");

  if (window.scrollY > 700) {
    navBar.style = "padding: 5px 30px";
    shopBtn.style = "top: 8px";
    toggleMenu.style = "top: 8px";
  } else if (window.scrollY < 500) {
    navBar.style = "padding: 20px 30px";
    shopBtn.style = "top: 20px";
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
  const scrollTrigger = (window.innerHeight / 100) * 99;
  const elToFadeIn = document.querySelectorAll(".fade-in");
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
