(function ($) {

  const ajaxSender = require('../common/ajax-promise-helper');
  const sanitizer = require('../common/sanitizer');
  const userIdentifier = require('../common/user-identifier');
  $(function () {

    loadAllUser();

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

    function loadAllUser() {
      let $userList = $('#app-user-list');
      ajaxSender.get('/api/users/getUser/'+userIdentifier.getMockUser())
        .then((res)=>{
          $userList.empty();
          res.forEach((userListViewModel)=>{
            var dom = `<a href="#" class="list-group-item" data-community-id="-1">
              <h4 class="list-group-item-heading">${sanitizer.sanitize(userListViewModel.userProf.userName)}</h4>
              ${resolveButtonType(userListViewModel)}
              <p class="list-group-item-text">${sanitizer.sanitize(userListViewModel.userProf.selfIntro)}</p>
              </a>`;
            $userList.append(dom);

          });
          console.log(res);
        });

      function resolveButtonType(userListViewModel) {
        if(userListViewModel.follow){
          return `<button class="btn btn-danger app-remove-button" data-user-id="${sanitizer.sanitize(userListViewModel.userProf.userId)}"><i class="glyphicon glyphicon-remove"></i> </button>`
        }else{
          return `<button class="btn btn-primary app-follow-button" data-user-id="${sanitizer.sanitize(userListViewModel.userProf.userId)}"><i class="glyphicon glyphicon-plus"></i> </button>`
        }
      }
    }

  });


})(window.jQuery);