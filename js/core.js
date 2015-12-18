(($, window) => {

  const Dashboard = window.Dashboard = {};
  Dashboard.support = {};

  const element = document.createElement('dashboard');

  function getTransitionEnd() {

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (element.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }

    return false;
  }

  Dashboard.support.transition = getTransitionEnd();

  function getRequestAnimationFrame() {

    var requestAnimationFrameNames = ['requestAnimationFrame', 'webkitRequestAnimationFrame', 'mozRequestAnimationFrame', 'oRequestAnimationFrame'];

    for (let i = 0; i < requestAnimationFrameNames.length; ++i) {
      if (window[requestAnimationFrameNames[i]] !== undefined) {
        return requestAnimationFrameNames[i];
      }
    }

    return function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }

  Dashboard.requestAnimationFrame = getRequestAnimationFrame();

  function getCancelAnimationFrame() {

    var cancelAnimationFrameNames = ['cancelAnimationFrame', 'webkitCancelAnimationFrame', 'mozCancelAnimationFrame', 'oCancelAnimationFrame'];

    for (let i = 0; i < cancelAnimationFrameNames.length; ++i) {
      if (window[cancelAnimationFrameNames[i]] !== undefined) {
        return cancelAnimationFrameNames[i];
      }
    }

    return function(callback) {
      window.clearTimeout(id);
    };
  }

  Dashboard.cancelAnimationFrame = getCancelAnimationFrame();

})(jQuery, window);
