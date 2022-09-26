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
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
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
// ======= page-loader =======
setTimeout(() => {
  const box = document.getElementById("box");

  box.style.display = "none";
  document.body.classList.add("overflow_auto");
}, 2000);

function visible(partial) {
  var $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;
  return (
    compareBottom <= viewBottom && compareTop >= viewTop && $t.is(":visible")
  );
}
$(window).scroll(function () {
  if (visible($(".count-digit"))) {
    if ($(".count-digit").hasClass("counter-loaded")) return;
    $(".count-digit").addClass("counter-loaded");
    $(".count-digit").each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate(
        { Counter: $this.text() },
        {
          duration: 3000,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.Counter));
          },
        }
      );
    });
  }
});
