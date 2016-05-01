(function ($) {
  $(function () {

    var contents = 'Hello,jQuery!';
    //es6 functions can use(ex.template strings)
    var elem = `<h1>${contents}</h1>`;
    $('body').append(elem);
    var SERVER_URL = 'http://localhost:8084';

    $.get(SERVER_URL + '/api/article/timeline/admin')
      .success(function (data) {
        console.log(data);
      })

  })
})(window.jQuery);