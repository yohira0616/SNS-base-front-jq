/**
 * パネル左部分の自分のプロフィールに関する操作を管理するjQueryスクリプト
 */
(function ($) {
  const ajaxSender = require('../common/ajax-promise-helper');

  $(function () {
    const identifier = require('../common/user-ifentifier');
    const userId = identifier.getMockUser();

    const $saveBtn = $('#app-my-profile-save-button');
    const $abortBtn = $('#app-my-profile-abort-button');
    const $editBtn = $('#app-my-profile-edit-button');

    const $selfIntroText = $('#app-my-profile-self-intro-text');
    const $selfIntroEdit = $('#app-my-profile-self-intro-edit');

    const $userId = $('#app-my-porfile-user-id');
    const $userNameText = $('#app-my-profile-user-name-text');
    const $userNameEdit = $('#app-my-profile-user-name-edit');

    $userId.text(userId);

    $saveBtn.hide();
    $abortBtn.hide();
    $selfIntroEdit.hide();
    $userNameEdit.hide();

    $editBtn.click(()=> {
      editmode();

    });

    $saveBtn.click(()=> {

      $.bootstrapGrowl('保存しました', {
        type: 'success'
      });
      readonlymode();
    });

    $abortBtn.click(()=> {
      readonlymode();

    });

    function editmode() {
      $editBtn.hide();
      $saveBtn.show();
      $abortBtn.show();
      $selfIntroText.hide();
      $selfIntroEdit.show().val($selfIntroText.text());
      $userNameText.hide();
      $userNameEdit.show().val($userNameText.text());
    }

    function readonlymode() {
      $editBtn.show();
      $saveBtn.hide();
      $abortBtn.hide();
      $selfIntroText.show();
      $selfIntroEdit.hide();
      $userNameText.show();
      $userNameEdit.hide();
    }


  });

  function loadUserInfo(userId) {
    //ajaxSender.get('/api/users/')

  }

})(window.jQuery);