(($) => {

  let animation = (function() {

    var animationEnd = (() => {
      var element = document.body || document.documentElement;
      var animEndEventNames = {
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'animationend',
        OAnimation: 'oAnimationEnd oanimationend',
        animation: 'animationend'
      };

      for (var name in animEndEventNames) {
        if (element.style[name] !== undefined) {
          return animEndEventNames[name];
        }
      }
    })();

    return animationEnd && {end: animationEnd};
  })();

  let rAF = (function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
      function(callback) {
        return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
      };
  })();

  let cancelAF = (function() {
    return window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      function(id) {
        window.clearTimeout(id);
      };
  })();

})(jQuery);
