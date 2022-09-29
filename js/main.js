// Header Mobile

let hamburgerMenu = document.getElementById("mobileMenu");

function showHeaderMobile() {
  hamburgerMenu.style.display === "block"? hamburgerMenu.style.display = "none" : hamburgerMenu.style.display = "block"
}


// Header Animation

let menu = document.getElementById("header");
let menuMobile = document.getElementById("header-mobile");
let navHeight = menu.offsetTop;
let navHeightMobile = menuMobile.offsetTop;

window.addEventListener("scroll", function() {
  if(window.matchMedia("(min-width: 992px)").matches){
    if(window.pageYOffset > navHeight) {
      menu.classList.add("fixed");
    } else {
      menu.classList.remove("fixed");
    }
  } else{
    if(window.pageYOffset > navHeightMobile) {
      menuMobile.classList.add("fixed");
    } else {
      menuMobile.classList.remove("fixed");
    }
  }
})


// Testimonial Carousel

let carouselIndex = 1;
showTestimonial(carouselIndex);

function swipeSlider(n) {
  showTestimonial(carouselIndex += n);
}

function currentTestimonial(n) {
  showTestimonial(carouselIndex = n);
}

function showTestimonial(n) {
  let i;
  let clientTestimonial = document.getElementsByClassName("testimonials-content");
  let bullets = document.getElementsByClassName("bullet");
  if (n > clientTestimonial.length) {carouselIndex = 1}
    if (n < 1) {carouselIndex = clientTestimonial.length}
    for (i = 0; i < clientTestimonial.length; i++) {
     clientTestimonial[i].style.display = "none";
    }
for (i = 0; i < bullets.length; i++) {
     bullets[i].className = bullets[i].className.replace(" selected", "");
    }
  clientTestimonial[carouselIndex-1].style.display = "block";
  bullets[carouselIndex-1].className += " selected";
}


// Form Validation

let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');


function validateForm(){
  name.addEventListener("input", validateName)
  email.addEventListener("input", validateEmail)
  message.addEventListener("input", validateMessage)
  validateName()
  validateEmail()
  validateMessage()
}

function validateName(){
  if(name.value == ''){
    name.setCustomValidity('Please enter your full name')
    name.style.backgroundColor = '#d67c7c'
  } else {
    name.setCustomValidity('')
    name.style.backgroundColor = '#f8f7f7'
  }
}

function validateEmail(){
  if(email.value == ''){
    email.setCustomValidity('Please enter your email')
    email.style.backgroundColor = '#d67c7c'
  } else {
    email.setCustomValidity('')
    email.style.backgroundColor = '#f8f7f7'
  }
}

function validateMessage(){
  if(message.value == ''){
    message.setCustomValidity('Please enter your message')
    message.style.backgroundColor = '#d67c7c'
  } else {
    message.setCustomValidity('')
    message.style.backgroundColor = '#f8f7f7'
  }
}

window.addEventListener("onclick", validateForm)