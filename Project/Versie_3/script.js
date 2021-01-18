const question = Array.from(document.querySelectorAll(".question-collapsable"));
const galleryImg = Array.from(document.querySelectorAll(".image"));


// collapses answers in faq.html
question.forEach(question => {
   question.addEventListener("click", (e) => {
      const classNameAnswer = e.target.nextElementSibling.classList;
      classNameAnswer.toggle("hidden-answer");

   })
});


const showModal = (image) => {
   const modal = document.createElement("div");
   document.body.appendChild(modal);
   modal.innerHTML = `<img class="modal-image" src="${image}" alt="picture1">`;
};


// handles functionality of images in gallery.html
galleryImg.forEach(image => {
   image.addEventListener("mouseenter", (e) => {
      image.classList.add("image-hovered")
   });
   image.addEventListener("mouseleave", (e) => {
      image.classList.remove("image-hovered")
   });

   image.addEventListener("click", (e) => {
      const imageSrc = e.target.getAttribute("src")
      showModal(imageSrc);
      const modalImage = document.querySelector(".modal-image")
      modalImage.addEventListener("click", (e) => {
         e.target.parentNode.remove();
      });
   });
});
