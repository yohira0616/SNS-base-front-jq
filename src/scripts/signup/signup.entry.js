(function ($) {

  $(function () {
    $('.app-register-btn').click(function () {
      var userId = $('#userid').val();
      var passwd = $('#passwd').val();
      var email = $('#email').val();

      var createParam = {
        userId: userId,
        password: passwd,
        email: email
      };
      console.log(createParam);
      console.log('登録しました');
    });
  })

})(window.jQuery);