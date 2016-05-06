(function ($) {
  const ajaxSender = require('../common/ajax-promise-helper');
  const sanitizer = require('../common/sanitizer');

  $(function () {

    loadCommunities();
    const $modal=$('#app-com-make-modal');

    $('#app-new-com-save-btn').click(function () {
      let communityName = $('#app-new-com-name').val();
      if (!communityName) {
        return;
      }
      let communityIntro = $('#app-new-com-explanation').val();
      const param = {
        communityName: communityName,
        introduction: communityIntro
      };
      ajaxSender.post('/api/community/create', param)
        .then((res)=> {
          loadCommunities();
          $.bootstrapGrowl("作成しました", {
            type: 'success'
          });
          $modal.modal('hide');
        }).catch((err)=> {
        console.log(err);
      });
    });

    /**
     * 保存されているコミュニティ一覧を読み込みます
     */
    function loadCommunities() {
      ajaxSender.get('/api/community/getComs')
        .then((res)=> {
          const $list = $('#app-com-list');
          $list.empty();
          res.forEach((community)=> {
            var dom = `
                <a href="#" class="list-group-item" data-community-id="${community.communityId}">
                    <h4 class="list-group-item-heading">${sanitizer.sanitize(community.communityName)}</h4>
                    <p class="list-group-item-text">${sanitizer.sanitize(community.introduction)}</p>

                </a>
                `;
            $list.append(dom);
          });
        })
        .catch((error)=> {
          console.log(error);
        })
    }
  });

})(window.jQuery);