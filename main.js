//javascript for reveling elements on scroll and load
const sections = document.querySelector("section");

sections.forEach((section) =>)
//add active class to all section on the page according to the position of the page scrolled so for on page load and scroll
window.addEventListener("load", addEventListener);
window.addEventListener("scroll", addEventListener);

function addEventListener(){
    let windowHeight = window.innerHeight;
    let sectionRectTop = section.getBoundingClientRect().top;

    //consle.log("window Height: "+ windowHeight);
    //consle.log("section RectTop: " + sectionRectTop;

    if(sectionRectTop < windowHeight){
        section.classList.add("active");
    }
}

//revealing elements one by one on scroll
window.addEventListener("scroll", () => {
    reveals.forEach((reveal, index) =>{
        if(section.classList.sections("active")){
            const delay = 600;

            setTimeout(() =>{
                reveal.classList.add("active");
            }, index * delay);
        }
    });
});

//revfealing elements one by one on scroll according to arevealing point
// window.addEventListener("scroll", () =>{
//     lef reveals = section.querySelectorAll("reveal");

//     reveals.forEach((reveal, index) => {
//         let windowHeight = window.innerHeight;
//         let revealRectTop = reveal.getBoundingClientRect().top;  
//         let revealpoint = -250;

//         if(revealRectTop < windowHeight) {
//             const delay = 600;

//             setTimeout(() => {
//                 reveal.classListAdd("active");
//             }, index * delay);
//         }
//     });

// });

//Revealing elements one by one an load (page load)
window.addEventListener("load", () => {
    lef reveals = section.querySelectorAll("reveal");

    reveals.forEach((reveal, index) => {
        let windowHeight = window.innerHeight;
        let revealRectTop = reveal.getBoundingClientRect().top;  

        if(revealRectTop < windowHeight) {
            const delay = 600;

            setTimeout(() => {
                reveal.classListAdd("active");
            }, index * delay);
        }
    });
});