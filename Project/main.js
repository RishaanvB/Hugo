
window.addEventListener("scroll", (event)=>{
    const header = document.getElementById("header-onscroll")
    if (window.scrollY > 30) {
        header.classList.add("header-border")
    }else{
        header.classList.remove("header-border")
        }
        
    
})

