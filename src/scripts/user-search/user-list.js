module.exports = (function ($) {

  let userList = {};


  const ajaxSender = require('../common/ajax-helper');
  const userIdentifier = require('../common/user-identifier');
  const sanitizer = require('../common/sanitizer');

  userList.loadAllUser = function () {
    let $userList = $('#app-user-list');
    ajaxSender.get('/api/users/getUser/' + userIdentifier.getMockUser())
      .then((res)=> {
        $userList.empty();
        res.forEach((userListViewModel)=> {
          var dom = `<a href="#" class="list-group-item">
              <h4 class="list-group-item-heading">${sanitizer.sanitize(userListViewModel.userProf.userName)}</h4>
              ${resolveButtonType(userListViewModel)}
              <p class="list-group-item-text">${sanitizer.sanitize(userListViewModel.userProf.selfIntro)}</p>
              </a>`;
          $userList.append(dom);
        });
      });


    function resolveButtonType(userListViewModel) {
      if (userListViewModel.follow) {
        return `<button class="btn btn-danger app-remove-button" data-user-id="${sanitizer.sanitize(userListViewModel.userProf.userId)}"><i class="glyphicon glyphicon-remove"></i> </button>`
      } else {
        return `<button class="btn btn-primary app-follow-button" data-user-id="${sanitizer.sanitize(userListViewModel.userProf.userId)}"><i class="glyphicon glyphicon-plus"></i> </button>`
      }
    }
  };

  return userList;


})(window.jQuery);