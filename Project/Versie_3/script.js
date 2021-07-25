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

// collapse navbar on specified scrollbar position.
window.addEventListener("scroll", () => {
  const navBar = document.getElementById("navbar");
  const shopBtn = document.getElementById("nav-shop-btn");
  const toggleMenu = document.querySelector(".toggle-menu");

  if (window.scrollY > 700) {
    navBar.style = "padding: 5px 30px";
    // shopBtn.style = "top: 8px";
    toggleMenu.style = "top: 8px";
  } else if (window.scrollY < 500) {
    navBar.style = "padding: 20px 30px";
    // shopBtn.style = "top: 20px";
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
  // console.log(elementBottom, "elementBottom");
  // console.log(nextSiblingTop, "nextSiblingtop");
  let distance = Math.floor(nextSiblingTop - elementBottom);
  distance = distance;
  console.log(distance);
  // console.log(scrollbar, "scrollbar");
  if (distance < 300) {
    console.log("distance < 300");
  }
  // nextSibling.style = "background-color: blue"

  // const scrollbarTarget = 1600;
  // let proximity = ((scrollbarTarget / scrollBar) * 100 / 100);

  // let posTop;
  // if(proximity)
  // posTop = proximity + 30;
  // console.log(window.scrollY, "scrolly");
  // console.log(proximity, "prox");
  // console.log(scrollBarY);
  // let elTop = 30;
  // let speed = 1.7

  // elToFadeIn.style = `top:${elTop-=1}%`;

  // elToFadeIn.forEach((sectionEl) => {
  //   sectionEl.addEventListener("click", () => {
  //     const nextSibling = sectionEl.parentNode.children[+1];
  //     console.log("clicked");
  //     console.log(nextSibling, "should be sesction");
  //   });
  // const topOfEl = el.getBoundingClientRect().top;
  // console.log(topOfEl, "topofel");
  // topOfEl < scrollTrigger
  //   ? el.classList.add("fade-onscroll")
  //   : el.classList.remove("fade-onscroll");
  // });
};

// window.addEventListener("scroll", changePosTop);

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
  if (scrollbarPosition >= 60) {
    thirdBg.classList.add("active-bg");
    firstBg.classList.remove("active-bg");
    secondBg.classList.remove("active-bg");
  }
};
window.addEventListener("scroll", switchBackground);

const mainEl = document.getElementById("main");
const footerHTML = `
<footer class="footer">
<div class="footer__shop-container">
  <h3>Grow Your Own Reishi</h3>
  <h4>Visit my partner’s shop and order your own Reishi!</h4>
  <a
    class="footer__shop-container btn"
    href="https://groenetakken.nl/product/reishi/"
    target="_blank"
    rel="noopener"
    rel="noreferrer"
    >Go To Shop</a
  >
</div>
<nav class="footer__navlinks-container">
  <ul>
    <li><a href="./index.html">Home</a></li>
    <li><a href="./how-it-grows.html">How It Grows</a></li>
    <li><a href="./consuming-reishi.html">Consuming Reishi</a></li>
    <li><a href="./faq.html">FAQ</a></li>
    <li><a href="./gallery.html">Gallery</a></li>
    <li><a href="./about.html">About Me</a></li>
    <li><a href="./contact.html">Contact</a></li>
  </ul>
</nav>
<div class="footer__socials-container">
  <a target="_blank" href="https://nl-nl.facebook.com/"
    ><i class="fab fa-facebook-square"></i
  ></a>
  <a target="_blank" href="https://twitter.com/"
    ><i class="fab fa-twitter-square"></i
  ></a>
  <a target="_blank" href="https://www.instagram.com/">
    <i class="fab fa-instagram-square"></i
  ></a>
</div>
</footer>
<footer class="copyright-container">
<small>© 2021 MushroomFruit. All rights reserved.</small>
<a href="#" class="copyright-container__chevron"
  ><span><i class="fas fa-chevron-up"></i></span> Back to top</a
>
</footer>`;

mainEl.insertAdjacentHTML("afterend", footerHTML);
