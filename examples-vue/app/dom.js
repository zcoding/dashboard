export default {

  getStyles(element) {
    var view = element.ownerDocument.defaultView;
    if (!view.opener) {
      view = window;
    }
    return view.getComputedStyle(element);
  },

  setStyles(element, styles) {
    for (var s in styles) {
      if (styles.hasOwnProperty(s)) {
        element.style[s] = styles[s];
      }
    }
  }

};
