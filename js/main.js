(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });
  // Testimonial carousel
  // $(".testimonial-carousel").owlCarousel({
  //   autoplay: true,
  //   items: 1,
  //   smartSpeed: 1500,
  //   dots: true,
  //   loop: true,
  //   margin: 25,
  //   nav: true,
  //   navText: [
  //     '<i class="bi bi-arrow-left"></i>',
  //     '<i class="bi bi-arrow-right"></i>',
  //   ],
  // });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    margin: 50,
    nav: true,
    items: 1,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  // Back to top button
  $(window).scroll(function () {
    $(this).scrollTop() > 300
      ? $("#back-to-top").addClass("back-to-top")
      : $("#back-to-top").removeClass("back-to-top");
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);

// if ($(window).width() < 983) {
//   $("#logo").attr("src", "img/logo.png");
// } else {
//   $("#logo").attr("src", "img/logo-branca.png");
// }
// $(window).resize(function () {
//   if ($(window).width() < 983) {
//     $("#logo").attr("src", "img/logo.png");
//   } else {
//     $("#logo").attr("src", "img/logo-branca.png");
//   }
// });
