/* eslint-disable */
/**
 * #SVG4EVERYBODY
 */
jQuery(function ($) {
  svg4everybody({});
});


/**
 * Menu
 */
document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelectorAll('.js-toggle-menu');
  const menu = document.querySelector('.js-mobile-nav');

  toggler.forEach(el => {
    el.addEventListener('click', toggleMenu);
  });

  function toggleMenu(event) {
    const btn = event.target;
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('mobile-nav--open');
  }
});

/**
 * Header scroll
 */
jQuery(function ($) {
  $(window).on('scroll', function() {
    const offsetY = $(window).scrollTop();
    const activeClass = 'header--scrolled';

    if ( offsetY > 300) {
      $('.js-header').addClass(activeClass);
    } else {
      $('.js-header').removeClass(activeClass);
    }
  });
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
  function initClientSlider() {
    let clientSlider = null;

    if (document.querySelectorAll('.js-client-slider').length) {
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
  }

  initClientSlider();
  window.addEventListener('resize', initClientSlider);

  function initAboutSlider() {
    if (document.querySelectorAll('.js-about-slider').length) {
      const aboutSlider = new Swiper('.js-about-slider', {
        loop: true,
        keyboard: {
          enabled: true,
        },
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: '.js-about-slider-wrapper .swiper-button-next',
          prevEl: '.js-about-slider-wrapper .swiper-button-prev',
        },
        breakpoints: {
          1024: {
            autoplay: false,
          },
        },
      });
    }
  }

  initAboutSlider();

  function initObjectSlider() {
    let objectSlider = null;

    if (document.querySelectorAll('.js-object-slider').length) {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        objectSlider = new Swiper('.js-object-slider', {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 20,
          keyboard: {
            enabled: true,
          },
          navigation: {
            nextEl: '.js-object-slider-wrapper .swiper-button-next',
            prevEl: '.js-object-slider-wrapper .swiper-button-prev',
          },
        });
      } else {
        if (objectSlider) {
          objectSlider.destroy();
          objectSlider = null;
        }
      }
    }
  }

  initObjectSlider();
  window.addEventListener('resize', initObjectSlider);

  function initTeamSlider() {
    let teamSlider = null;

    if (document.querySelectorAll('.js-team-slider').length) {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        teamSlider = new Swiper('.js-team-slider', {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 15,
          keyboard: {
            enabled: true,
          },
          navigation: {
            nextEl: '.js-team-slider-wrapper .swiper-button-next',
            prevEl: '.js-team-slider-wrapper .swiper-button-prev',
          },
          breakpoints: {
            1400: {
              spaceBetween: 20,
            },
          },
        });
      } else {
        if (teamSlider) {
          teamSlider.destroy();
          teamSlider = null;
        }
      }
    }
  }

  initTeamSlider();
  window.addEventListener('resize', initTeamSlider);

  function initDocsSlider() {
    const sliderWrapper = document.querySelectorAll('.js-docs-slider-wrapper');
    const opts = {
      loop: true,
      spaceBetween: 20,
      keyboard: {
        enabled: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    };

    if (sliderWrapper.length) {
      if (sliderWrapper.length > 1) {
        sliderWrapper.forEach((wrapper, index) => {
          const wrapperID = `#docs-slider-wrapper-${index + 1}`;
          const slider = `${wrapperID} .js-docs-slider`;
          const prev = `${wrapperID} .swiper-button-prev`
          const next = `${wrapperID} .swiper-button-next`;

          opts.navigation = {
            nextEl: next,
            prevEl: prev,
          }

          const docsSlider = new Swiper(slider, opts);
        });
      } else {
        opts.navigation = {
          nextEl: '.js-docs-slider-wrapper .swiper-button-next',
          prevEl: '.js-docs-slider-wrapper .swiper-button-prev',
        };

        const docsSlider = new Swiper('.js-docs-slider', opts);
      }
    }
  }

  initDocsSlider();

  function initProjectSlider() {
    const projectThumbs = new Swiper('.js-project-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        768: {
          spaceBetween: 5
        },
      },
    });

    const projectSlider = new Swiper('.js-project-slider', {
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: projectThumbs,
      },
    });
  }

  initProjectSlider();
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


/**
 * Lightbox
 */
document.addEventListener('DOMContentLoaded', function () {
function initLightbox() {
  const videoLightbox = GLightbox({
    selector: '.js-lightbox-video',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
  });

  const imageLightbox = GLightbox({
    selector: '.js-lightbox-image',
    touchNavigation: true,
    loop: true,
  });
}

initLightbox();
});


/**
 * Form
 */
document.addEventListener('DOMContentLoaded', function () {
  function setObjectFormFields() {
    const outerObjectType = document.querySelector('#object-type-outer');
    const outerObjectArea = document.querySelector('#object-area-outer');
    const innerObjectType = document.querySelector('#object-type-inner');
    const innerObjectArea = document.querySelector('#object-area-inner');
    const objectType = document.querySelector('#object-type');
    const objectArea = document.querySelector('#object-area');

    outerObjectType.addEventListener('input', event => {
      fieldToField(outerObjectType, objectType);
    });

    innerObjectType.addEventListener('input', event => {
      fieldToField(innerObjectType, objectType);
    });

    outerObjectArea.addEventListener('input', event => {
      fieldToField(outerObjectArea, objectArea);
    });

    innerObjectArea.addEventListener('input', event => {
      fieldToField(innerObjectArea, objectArea);
    });
  }

  setObjectFormFields();

  function grabCheckboxes() {
    const customCheckboxes = document.querySelectorAll('.js-form-checkboxes');

    customCheckboxes.forEach(group => {

      group.addEventListener('click', event => {
        if (!event.target.getAttribute('data-value') || event.target.getAttribute('aria-checked') === 'true') return;

        const checkbox = event.target;
        const value = checkbox.dataset.value;
        const field = group.querySelector('input[type=hidden]');
        const checkboxes = group.querySelectorAll('[data-value]');

        checkboxes.forEach(control => {
          control.classList.remove('checked');
          control.setAttribute('aria-checked', 'false');
        });

        checkbox.classList.add('checked');
        checkbox.setAttribute('aria-checked', 'true');
        field.value = value;
        triggerInput(field);
      });
    });
  }

  grabCheckboxes();

  function fieldToField(source, target) {
    target.value = source.value;
  }

  function triggerInput(element) {
    const eventInput = new InputEvent('input', {
      view: window,
      bubbles: true,
      cancelable: true
    });

    const eventChange = new Event('change', {
      view: window,
      bubbles: true,
      cancelable: true
    });

    element.dispatchEvent(eventInput);
    element.dispatchEvent(eventChange);
  }
});
