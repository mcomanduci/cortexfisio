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
    let $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", "");
    });
  });

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

  // Send to Whatsapp Index
  function sendToWhatsapp() {
    const number = "5537996719764";
    const name = $("#name-form-index").val();
    const email = $("#email-form-index").val();
    const phone = $("#phone-form-index").val();
    const subject = $("#subject-form-index").val();
    const message = $("#text-form-index").val();

    const url = `https://api.whatsapp.com/send?phone=${number}&text=Nome: ${name}%0aEmail: ${email}%0aTelefone: ${phone}%0aAssunto: ${subject}%0aMensagem: ${message}%0a`;
    window.open(url, "_blank", "noreferrer").focus();
  }

  $("#send-form-index").click(sendToWhatsapp);

  // Send to Whatsapp Contact
  function sendToWhatsappContact(e) {
    e.preventDefault();
    const number = "5537996719764";
    const name = $("#name-form-contact").val();
    const email = $("#email-form-contact").val();
    const phone = $("#phone-form-contact").val();
    const subject = $("#subject-form-contact").val();
    const message = $("#text-form-contact").val();

    const url = `https://api.whatsapp.com/send?phone=${number}&text=Nome: ${name}%0aEmail: ${email}%0aTelefone: ${phone}%0aAssunto: ${subject}%0aMensagem: ${message}%0a`;
    window.open(url, "_blank", "noreferrer").focus();
  }

  $("#send-form-contact").click(sendToWhatsappContact);

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

// TEST IDLE

let interval = 0;

setInterval(function () {
  if (interval == 60) {
    $(".testeidle").hide();
    interval = 0;
  }
  interval = interval + 1;
}, 1000);

$(document).bind("mousemove keypress", function () {
  $(".testeidle").show();
  interval = 0;
});