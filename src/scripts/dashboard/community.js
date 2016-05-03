(function ($) {
  const ajaxSender = require('../common/ajax-promise-helper');
  const sanitizer = require('../common/sanitizer');

  $(function () {

    $('#app-new-com-save-btn').click(function () {
      let communityName = $('#app-new-com-name').val();
      if (!communityName) {
        return;
      }
      let communityIntro = $('#app-new-com-explanation').val();
      const param = {
        communityName: communityName,
        introduction: communityIntro
      };
      ajaxSender.post('/api/community/create', param)
        .then((res)=> {
          $.bootstrapGrowl("作成しました", {
            type: 'success'
          });
        }).catch((err)=> {
        console.log(err);
      });
    });
  });

})(window.jQuery);