(function ($) {

  const ajaxSender = require('../common/ajax-promise-helper');
  const userIdentifier = require('../common/user-identifier');
  const userList = require('./user-list');

  const ENTER_KEY_CODE = 13;
  $(function () {

    userList.loadAllUser();

    const $body = $('body');

    $body.on('click', 'button.app-follow-button', function (e) {
      let userId = $(this).attr('data-user-id');
      let myId = userIdentifier.getMockUser();
      ajaxSender.post('/api/users/follow/' + myId + '/' + userId + '/')
        .then((res)=> {
          userList.loadAllUser();
        });
    });

    $body.on('click', 'button.app-remove-button', function (e) {
      let userId = $(this).attr('data-user-id');
      let myId = userIdentifier.getMockUser();
      ajaxSender.post('/api/users/remove/' + myId + '/' + userId + '/')
        .then((res)=> {
          userList.loadAllUser();
        });
    });

    $('#app-user-search-input').on('keydown', function (e) {
      if (e.keyCode !== ENTER_KEY_CODE) {
        return;
      }
      //TODO implement user_search

    });

  });


})(window.jQuery);