$(document).ready(function () {
  $(".menu__dropdown").on("click", function (e) {
    e.stopPropagation();
    $(this).children(".menu__sub").slideToggle();
  });
  $(".menu__link, .menu__sub-link").on("click", function (e) {
    e.stopPropagation();
  });

  $('.js-dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).parent().siblings('.js-dropdown-menu').slideToggle();
  });

  $('.navbar-mobile-btn').on('click', function () {
    $('.navbar-mobile, .navbar-backdrop').addClass('is-show');
    $('body').addClass('over-hidden');
  });
  $('.navbar-backdrop, .navbar-mobile-close, .navbar-close').on('click', function () {
    $('.navbar-mobile, .navbar-backdrop').removeClass('is-show');
    $('body').removeClass('over-hidden');
  });

  // move top button
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
      $('.btn-movetop').fadeIn(500);
    } else {
      $('.btn-movetop').fadeOut(500);
    }
  });
  $(".btn-movetop").on("click", function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });

  if ($(".js-brand-slider").length) {
    new Swiper(".js-brand-slider", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500
      },
      speed: 600,
      navigation: {
        prevEl: ".js-brand-slider-prev",
        nextEl: ".js-brand-slider-next"
      },
      breakpoints: {
        1200: {
          slidesPerView: 4
        },
        992: {
          slidesPerView: 3
        },
        576: {
          slidesPerView: 2
        }
      }
    });
  }

  $(".js-banner").each(function () {
    var slider = new Swiper(this, {
      init: false,
      slidesPerView: 1,
      autoplay: {
        delay: 2500
      },
      speed: 800,
      loop: true,
      pagination: {
        el: ".banner__pagination",
        clickable: true
      }
    });

    slider.on("slideChange", function () {
      var text = $(".banner__text");
      $(text).removeClass("active");
    });

    slider.on("init, transitionStart", function () {
      var text = $(".banner .swiper-slide-active .banner__text");
      $(text).addClass("active");
    });

    slider.init();
  });

  $(".md-video").on("hide.bs.modal", function () {
    $(this).find("iframe").attr("src", "");
  });
  $(".js-video-modal-btn").on("click", function (e) {
    e.preventDefault();
    var src = $(this).data("src");
    $(".md-video").find("iframe").attr("src", src + "?autoplay=1");
    $(".md-video").modal("show");
  });
});