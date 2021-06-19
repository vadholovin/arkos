/* eslint-disable */
/**
 * #SVG4EVERYBODY
 */
jQuery(function ($) {
  svg4everybody({});
});


/**
 * Simplebar
 */
document.addEventListener('DOMContentLoaded', function () {
  const seoScroll = document.querySelectorAll('.js-seo-content');

  seoScroll.forEach(el => {
    const scrollbar = new SimpleBar(el, {
      autoHide: false,
      scrollbarMinSize: 50,
      scrollbarMaxSize: 50,
    });

    scrollbar.recalculate();
  });
});


/**
 * Sliders
 */
document.addEventListener('DOMContentLoaded', function () {
  let clientSlider = null;

  function initClientSlider() {
    if (window.matchMedia('(max-width: 1023.99px)').matches) {
      clientSlider = new Swiper('.js-client-slider', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 15,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: '.js-client-slider-wrapper .swiper-button-next',
          prevEl: '.js-client-slider-wrapper .swiper-button-prev',
        },
        breakpoints: {
          576: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    } else {
      if (clientSlider) {
        clientSlider.destroy();
        clientSlider = null;
      }
    }
  }

  initClientSlider();
  window.addEventListener('resize', initClientSlider);


});


/**
 * Services
 */
jQuery(function ($) {
  function initServices() {
    var parent = '#service-accordion';
    var $accordion = $(parent);

    if (window.matchMedia('(min-width: 768px)').matches) {
      $accordion.removeClass('active');
    } else {
      $accordion.addClass('active');
    }

    $('.js-service-card').each(function (index, el) {
      const $toggler = $(this).find('.js-service-toggler');
      const $collapse = $(this).find('.js-service-collapse');

      if ($accordion.is('.active')) {
        $toggler.attr('data-toggle', 'collapse');

        if (index === 0) {
          $toggler.attr('aria-expanded', true);
          $collapse.addClass('show');
        } else {
          $toggler.addClass('collapsed').attr('aria-expanded', false);
          $collapse.removeClass('show');
        }
      } else {
        $toggler
          .removeAttr('data-toggle')
          .removeClass('collapsed')
          .attr('aria-expanded', true);
        $collapse.addClass('show');
      }
    });
  }

  initServices();
  $(window).on('resize', initServices);

});
