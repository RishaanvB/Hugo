const question = Array.from(document.querySelectorAll(".question-collapsable"))
// const array = Array.from(question)

question.forEach(question => {
   question.addEventListener("click",(e)=>{
       console.log("clicked")
    const classNameAnswer = e.target.nextElementSibling.classList
    classNameAnswer.toggle("hidden-answer")

   })
});