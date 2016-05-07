/**
 * パネル左部分の自分のプロフィールに関する操作を管理するjQueryスクリプト
 */
(function ($) {
  const ajaxSender = require('../common/ajax-promise-helper');
  const UserProf = require('../viewmodel/user-profile');

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

    loadUserInfo(userId);

    $editBtn.click(()=> {
      editmode();
    });

    $saveBtn.click(()=> {
      let param = new UserProf(userId, $userNameEdit.val(), $selfIntroEdit.val());
      ajaxSender.post('/api/users/profile/update', param)
        .then((res)=> {
          $.bootstrapGrowl('保存しました', {
            type: 'success'
          });
          $userNameText.text(param.userName);
          $selfIntroText.text(param.selfIntro);
          readonlymode();
        }).catch((error)=> {
        console.log(error);
      });


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

    function loadUserInfo(userId) {
      ajaxSender.get('/api/users/profile/getprof/' + userId)
        .then((res)=> {
          let userProf = new UserProf(res.userId, res.userName, res.selfIntro);
          $selfIntroText.text(userProf.selfIntro);
          $userNameText.text(userProf.userName);
          console.log(userProf);
        }).catch((error)=> {
        console.log(error);
      })
    }


  });


})(window.jQuery);