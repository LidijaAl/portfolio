const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const main = document.querySelectorAll(".landing");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
      link.classList.toggle("fade")
  })
});

hamburger.addEventListener("click", ()=>{
  main.forEach(item => {
    item.classList.toggle("noshow");
    navLinks.style.zIndex = "1";
  })
})

const navbar = document.getElementById("navbar");
const sideNavbar = document.getElementById("side-navbar")
let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos){
  navbar.style.opacity = "0";
  sideNavbar.style.opacity = "1";
  } else {
    navbar.style.opacity = "1"
    sideNavbar.style.opacity = "0";
  }
}