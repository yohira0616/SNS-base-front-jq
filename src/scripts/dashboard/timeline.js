(function ($) {

  $(function () {
    window.app.userId = $.cookie('app-user-id');
    var userId = window.app.userId;
    console.log(window.app.userId);
    const ajaxSender = require('../common/ajax-promise-helper');

    $('.app-login-user-name').text(userId);

    //記事を読み込む
    drawTimeline();

    //記事を投稿する
    $('#app-article-post-btn').click(function () {
      const $textarea = $('#app-article-post-txt');
      let contents = $textarea.val();
      if (!contents) {
        return;
      }
      let param = {
        userId: window.app.userId,
        contents: contents
      };
      ajaxSender.post('/api/article/create', param).then(function (response) {
        $.bootstrapGrowl('書き込みに成功しました', {
          type: 'success'
        });
        console.log(response);
        $textarea.val('');
        drawTimeline();
      }).catch(function (error) {
        console.log(error)
      });

    });

    function drawTimeline() {
      let $timeline = $('#app-timeline');
      ajaxSender.get('/api/article/timeline/' + userId)
        .then((articles)=> {
          console.log(articles);
          $timeline.empty();
          articles.forEach((article)=> {
            var d = new Date(article.postDate);
            //TODO XSS handling
            var dom = `
                 <div class="list-group-item">
                    <div class="app-timeline-post-icons" style="padding-left: 98%;">
                        <a href="javascript:void(0);">
                            <i class="glyphicon glyphicon-trash"></i></a>
                    </div>
                    <p class="list-group-item-text">${article.contents}</p>
                    <p class="list-group-item-text">posted by ${article.userId}<span class="pull-right">${d.toDateString()}</span></p>
                </div>`;
            $timeline.append($(dom));
          });
        }).catch((error)=> {
        console.log(error);
      });

    }

  });

})(window.jQuery);