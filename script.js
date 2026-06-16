const navBtn = document.querySelector('.navBtn');
const navScreen = document.querySelector('.navScreen');
const home = document.querySelector(".hero");
const about = document.querySelector(".about");
const testimonial = document.querySelector(".testimonial");
const homeBtn = document.querySelector(".HomeBtn");
const aboutBtn = document.querySelector(".AboutBtn");
const testimonialBtn = document.querySelector(".TestimonialBtn");

navBtn.addEventListener('click', function() {
    navScreen.classList.toggle("active");
    navBtn.classList.toggle("cross");
})
homeBtn.addEventListener('click', function() {
    navScreen.classList.remove("active");
    navBtn.classList.remove("cross");
    home.scrollIntoView({behavior:"smooth"});
})
aboutBtn.addEventListener('click', function() {
    navScreen.classList.remove("active");
    navBtn.classList.remove("cross");
    about.scrollIntoView({behavior:"smooth"});
})
testimonialBtn.addEventListener('click', function() {
    navScreen.classList.remove("active");
    navBtn.classList.remove("cross");
    testimonial.scrollIntoView({behavior:"smooth"});
})
