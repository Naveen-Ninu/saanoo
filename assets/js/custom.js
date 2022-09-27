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

// $(".slick_slider").slick({
//   centerMode: true,
//   centerPadding: "80px",
//   slidesToShow: 2,
//   dots: true,
//   infinite: true,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   responsive: [{
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: "70px",
//         slidesToShow: 1,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: "30px",
//         slidesToShow: 1,
//         dots: true,
//       },
//     },
//   ],
// });

$(".slick_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  dots: true,
  speed: 1000,
  centerPadding: "",
  autoplay: true,
  autoplaySpeed: 1300,
  infinite: true,
  // autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
