
var typed = new Typed(".multiple-text", {
    strings: [
        "FullStack Web Developer ", 
        "Multimedia Developer ", 
        "Business Administrator "
    ],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 100,
    loop: true
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});