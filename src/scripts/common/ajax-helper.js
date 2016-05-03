module.exports = (function ($) {
  var ajaxHelper = {};
  var SERVER_URL = 'http://localhost:8084';

  ajaxHelper.post = function (path, requestParam) {
    return $.ajax({
      type: 'POST',
      url: SERVER_URL + path,
      data: JSON.stringify(requestParam),
      contentType: 'application/json'
    });
  };

  ajaxHelper.get = function (path, requestParam) {
    return $.ajax({
      type: 'GET',
      url: SERVER_URL + path,
      data: JSON.stringify(requestParam),
      contentType: 'application/json'
    });
  };
  return ajaxHelper;
})(window.jQuery);