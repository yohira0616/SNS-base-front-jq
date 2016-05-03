(function ($) {

  $(function () {

    $('#ex-button').click(()=> {
      var param = {
        userId: 'admin',
        contents: 'test'
      };
      var ajaxSender = require('./common/ajax-helper');
      ajaxSender.post('/api/article/create',param).success(function (response) {
        console.log('post done');
        console.log(response);
      }).error(function(error){
        console.log('post error');
        console.log(error);
      });
    })
  })

})(window.jQuery);