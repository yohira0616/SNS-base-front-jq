(function ($) {

  $(function () {


    $('.app-register-btn').click(function () {
      var userId = $('#userid').val();
      var passwd = $('#passwd').val();
      var email = $('#email').val();
      //validation
      if (!userId) {
        return;
      }
      if (!passwd) {
        return;
      }
      if (!email) {
        return;
      }
      var createParam = {
        userId: userId,
        password: passwd,
        emailAddress: email
      };
      let ajaxHelper = require('../common/ajax-helper');
      ajaxHelper.post('/api/users/create', createParam)
        .success(function (response) {
          $.bootstrapGrowl("ユーザー登録が完了しました", {
            type: 'success'
          });

        }).error(function (error) {
        console.log(error);
        window.alert('何らかのエラーが発生しました');
      });

    });

  })

})(window.jQuery);