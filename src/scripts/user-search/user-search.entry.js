(function ($) {

  const ajaxSender = require('../common/ajax-promise-helper');
  $(function () {

    loadAllUser();

    function loadAllUser() {
      ajaxSender.get('/api/users/')
        .then((res)=> {
          console.log(res);
        });
    }

  });


})(window.jQuery);