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

  // Sticky Navbar
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 45) {
  //     $(".navbar").addClass("sticky-top shadow-sm");
  //   } else {
  //     $(".navbar").removeClass("sticky-top shadow-sm");
  //   }
  // });

  // Hero Header carousel
  // $(".header-carousel").owlCarousel({
  //   // animateIn: "fadeIn",
  //   animateOut: "zoomOut",
  //   responsiveClass: true,
  //   items: 1,
  //   autoplay: true,
  //   // autoplayTimeout: 5000,
  //   // smartSpeed: 5000,
  //   dots: false,
  //   loop: true,
  // });

  // $(".header-carousel").on("changed.owl.carousel", function () {
  //   $(".hero-banner").css("animation", "none");
  //   window.requestAnimationFrame(function () {
  //     $(".hero-banner").css("animation", "");
  //   });
  // });

  // International carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

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

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
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
