(function ($) {

  $(function () {

    $('#app-new-com-save-btn').click(function () {

      $.bootstrapGrowl("作成しました", {
        type: 'success'
      });

    });
  });

})(window.jQuery);