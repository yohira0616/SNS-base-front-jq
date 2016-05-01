(function ($) {

  $(function () {

    $('#ex-button').click(()=> {
      var SERVER_URL = 'http://localhost:8084';
      var param={
        userId:'admin',
        contents:'test'
      };

      $.ajax({
        type: 'POST',
        url: SERVER_URL + '/api/article/create',
        data: JSON.stringify(param),
        contentType: 'application/json',
        dataType: 'JSON'
      }).success(function (data) {
        alert('done!');
        console.log(data)
      }).error(function (data) {
        console.log(data)
      })
    })
  })

})(window.jQuery);