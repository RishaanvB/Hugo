const question = Array.from(document.querySelectorAll(".question-collapsable"));
const galleryImg = Array.from(document.querySelectorAll(".image"));
const toggleMenu = document.querySelector(".toggle-menu");

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

// handles animation on scroll for phase section images
const animateImagesOnDisplay = () => {
  const scrollTrigger = (window.innerHeight / 100) * 99;
  const elToFadeIn = document.querySelectorAll(".fade-in");
  elToFadeIn.forEach((elToFadeIn) => {
    const topOfEl = elToFadeIn.getBoundingClientRect().top;
    topOfEl < scrollTrigger
      ? elToFadeIn.classList.add("fade-onscroll")
      : elToFadeIn.classList.remove("fade-onscroll");
  });
};
window.addEventListener("scroll", animateImagesOnDisplay);

const fadeOnLoad = () => {
  const fadeElements = document.querySelectorAll(".onload");
  const navbar = document.querySelector("#navbar");
  navbar.classList.add("navbar-animate-onload");
  fadeElements.forEach((element) => element.classList.add("fade-onload"));
};
// fadeOnLoad()
window.addEventListener("load", () => {
  fadeOnLoad();
});

// Hamburger menu
// toggleMenu.addEventListener("click", ()=>{
//    console.log("clicked");
//    const navList = document.querySelector(".navbar__links")
//    navList.classList.toggle("menu-open")
//    // console.log(navList);
//    // const navList = document.querySelector(".main-header__nav__list")
//    // navList.classList.toggle("active")
// })

toggleMenu.addEventListener("click", () => {
  const navList = document.querySelector(".navbar__links");
  navList.classList.toggle("menu-open");
});

// collapses answers in faq.html
question.forEach((question) => {
  question.addEventListener("click", (e) => {
    const classNameAnswer = e.target.nextElementSibling.classList;
    classNameAnswer.toggle("hidden-answer");
  });
});

const showModal = (image) => {
  const modal = document.createElement("div");
  document.body.appendChild(modal);
  modal.innerHTML = `<img class="modal-image" src="${image}" alt="picture1">`;
};

// handles functionality of images in gallery.html
galleryImg.forEach((image) => {
  image.addEventListener("mouseenter", (e) => {
    image.classList.add("image-hovered");
  });
  image.addEventListener("mouseleave", (e) => {
    image.classList.remove("image-hovered");
  });

  image.addEventListener("click", (e) => {
    const imageSrc = e.target.getAttribute("src");
    showModal(imageSrc);
    const modalImage = document.querySelector(".modal-image");
    modalImage.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  });
});
