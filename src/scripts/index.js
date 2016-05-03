(function ($) {
  $(function () {

    var SERVER_URL = 'http://localhost:8084';

    $.get(SERVER_URL + '/api/article/timeline/admin')
      .success(function (data) {
        console.log(data);
      })
  })
})(window.jQuery);