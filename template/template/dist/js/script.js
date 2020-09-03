//?----------------slider---------------------
/*
$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: "linear",
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    swipe: true,
    touchThresHold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false, //*recommend to combine with previous
    rows: 1,
    slidesPerRow: 1, //*recommend to combine with previous
    vertical: false,
    verticalSwiping: false, //*recommend to combine with previous
    fade: false,
    //?Bundle of 2 or more sliders
    //*asNavFor="";
    responsive:[{
      breakpoint:768,
      settings:{}
    }]
  });
});
*/
//?-------------------------------------------
//*------------------ibg----------------------
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();
//*-------------------------------------------
//?----------------burger---------------------
$(".icon-menu").click(function (event) {
  $(this).toggleClass("active");
  $(".menu__body").toggleClass("active");
  $("body").toggleClass("lock");
});
//?-------------------------------------------

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}
