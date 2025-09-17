let slides = document.querySelectorAll(".slide");

for(let i=0; i<slides.length; i++){
    slides[i].addEventListener("click", () => {
        cleareActiveClasses();
        slides[i].classList.add('active');
    })
}

function cleareActiveClasses(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove("active");
    }
}