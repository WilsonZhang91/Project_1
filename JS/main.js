const loader = document.querySelector(".preloader")

window.addEventListener("load",()=> 
setTimeout( ()=> {
    loader.classList.add("disappear")
},2000 )
)  

const header = document.querySelector(".sticky-wrapper")

window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY > 44);
})

let counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

const scrollToTop = document.querySelector(".scrolltotop");

window.addEventListener("scroll", () => {
    scrollToTop.classList.toggle("totop",window.scrollY > 300);
})

const mobileMenu = document.querySelector(".mobile-menu-list");
const hamburgerBtn = document.querySelector(".hamburger-btn");
hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-menu-open")
})