(($) => {

  class Button {

    constructor() {}

    toggle() {}

    setState() {}

  }

  const old = $.fn.button;

  function button(options) {
    return $(this).each((index, ele) => {
    });
  }

  $.fn.extend({ button });

  $.fn.button.Constructor = Button;

  $.fn.button.noConflit = function() {
    $.fn.button = old;
    return this;
  };

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', (e) => {
      var $btn = $(e.target);
      if (!$btn.hasClass('btn')) {
        $btn = $btn.closest('.btn');
      }
      button.call($btn, 'toggle');
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) {
        e.preventDefault();
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

})(jQuery);
