(function ($) {

  $('#app-btn-signin').click(function (e) {
    let userId = $('#user-id').val();
    e.preventDefault();
    window.alert('セキュリティガバガバログインを実行します');
    $.cookie('app-user-id', userId);

    console.log($.cookie('app-user-id'));
    window.location.href = "/dashboard.html";

  })

})(window.jQuery);