(function ($) {

  $(function () {

    $('#ex-button').click(()=> {
      var param = {
        userId: 'admin',
        contents: 'test'
      };
      var ajaxSender = require('./common/ajax-promise-helper');
      ajaxSender.post('/api/article/create', param).then(function (response) {
        console.log('post done');
        console.log(response);
      }).catch(function (error) {
        console.log(error)
      });
    })
  })

})(window.jQuery);