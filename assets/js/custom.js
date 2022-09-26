//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// preloader

var preloader = document.getElementById("loading");
var body = document.querySelector("body");
var html = document.querySelector("html");
setTimeout(function loader() {
  console.log("preloader");
  preloader.style.display = "none";
  body.classList.remove("no-scroll-y");
  // body.classList.add('no-scroll-x');
  html.classList.add("no-scroll-x");
}, 3000);

// Aos_Animation-----------------------
AOS.init({
  once: true,
});
// slider_code

$(".slick_slider").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 2,
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
});
