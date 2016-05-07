(function ($) {

  const ajaxSender = require('../common/ajax-promise-helper');
  const sanitizer = require('../common/sanitizer');
  const userIdentifier = require('../common/user-identifier');
  const userList = require('./user-list');
  $(function () {

    userList.loadAllUser();

    $('body').on('click', 'button.app-follow-button', function (e) {
      let userId = $(e.target).attr('data-user-id');
      let myId = userIdentifier.getMockUser();
      console.log(userId);
      console.log(myId);
      ajaxSender.post('/api/users/follow/' + myId + '/' + userId + '/')
        .then((res)=> {
          console.log('done!');
        })
    });

  });


})(window.jQuery);