window.app = {};

(function ($) {

  $(function () {
    window.app.userId = $.cookie('app-user-id');
    console.log(window.app.userId);

    //記事を投稿する
    $('#app-article-post-btn').click(function () {
      const $textarea = $('#app-article-post-txt');
      let contents = $textarea.val();
      if (!contents) {
        return;
      }
      const ajaxSender = require('../common/ajax-promise-helper');
      let param = {
        userId: window.app.userId,
        contents: contents
      };
      ajaxSender.post('/api/article/create', param).then(function (response) {
        $.bootstrapGrowl('書き込みに成功しました', {
          type: 'success'
        });
        console.log(response);
        $textarea.val('');
      }).catch(function (error) {
        console.log(error)
      });

    });

  });

})(window.jQuery);