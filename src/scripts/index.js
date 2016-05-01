(function ($) {
  $(function () {

    var contents = 'Hello,jQuery!';
    //es6 functions can use(ex.template strings)
    var elem = `<h1>${contents}</h1>`;
    $('body').append(elem);
  })
})(window.jQuery);