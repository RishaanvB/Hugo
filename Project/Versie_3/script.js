const galleryImg = Array.from(document.querySelectorAll(".image"));
const toggleMenu = document.querySelector(".toggle-menu");
const fadeElements = document.querySelectorAll(".onload");
window.addEventListener("scroll", animateImagesOnDisplay);
const questions = document.querySelectorAll(".faq-container__aq-block ")


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
questions.forEach(question=>{
  question.addEventListener("click", ()=>{
    const block = question.parentNode
    console.log(block);
    question.classList.toggle("display-question")
    const answer = question.childNodes[5]
    const chevron = question.childNodes[1]
    answer.classList.toggle("display-question")
    chevron.classList.toggle("display-question")
  })
})

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
