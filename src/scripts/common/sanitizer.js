module.exports = (function ($) {
  let sanitizer = {};

  /**
   * 文字列をサニタイズします
   * @param text
   */
  sanitizer.sanitize = function (text) {
    let $fakeDiv = $('<div></div>');
    $fakeDiv.text(text);
    return $fakeDiv.html();
  };

  return sanitizer;
})(window.jQuery);