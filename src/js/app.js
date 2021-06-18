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
  const seoScrollable = document.querySelectorAll('.js-seo-content');

  seoScrollable.forEach(el => {
    const scrollbar = new SimpleBar(el, {
      autoHide: false,
      scrollbarMinSize: 50,
      scrollbarMaxSize: 50,
    });

    scrollbar.recalculate();
  });
});


