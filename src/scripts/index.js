(function ($) {
  $(function () {


    var ajaxHelper = require('./common/ajax-helper');
    ajaxHelper.get('/api/article/timeline/admin').success(function (response) {
      console.log('done!');
      console.log(response);
    }).error((error)=> {
      console.log('error!');
      console.log(error);
    });
  })
})(window.jQuery);