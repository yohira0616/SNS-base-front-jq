(function ($) {

  $(function () {
    window.app.userId = $.cookie('app-user-id');
    var userId = window.app.userId;
    const ajaxSender = require('../common/ajax-promise-helper');
    const sanitizer = require('../common/sanitizer');
    const $body = $('body');

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
            var dom = `
                 <div class="list-group-item">
                    <div class="app-timeline-post-icons" style="padding-left: 92%;">
                         <a href="javascript:void(0);">
                            <span class="glyphicon glyphicon-star-empty app-article-fav" data-article-id="${article.articleId}"></span>
                            <span class="glyphicon glyphicon-trash app-article-del" data-article-id="${article.articleId}"></span>
                         </a>
                    </div>
                    <p class="list-group-item-text">${sanitizer.sanitize(article.contents)}</p>
                    <p class="list-group-item-text">posted by ${article.userId}<span class="pull-right">${d.toDateString()}</span></p>
                </div>`;
            $timeline.append($(dom));
          });
        }).catch((error)=> {
        console.log(error);
      });
    }

    $body.on('click', 'span.app-article-del', function (e) {
      const articleId = $(this).data('articleId');
      ajaxSender.post('/api/article/delete/' + articleId)
        .then((res)=> {
          $.bootstrapGrowl('削除しました', {type: 'success'});
          drawTimeline();
        });
    });

    $body.on('click', 'span.app-article-fav', function (e) {
      const articleId = $(this).data('article-id');
      console.log(articleId);

    });


  });

})(window.jQuery);