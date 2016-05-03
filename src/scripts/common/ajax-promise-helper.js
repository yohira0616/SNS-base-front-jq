/**
 * promiseインタフェースでajax通信を扱うためのラッパー関数
 * (実験的)
 */
module.exports = (function ($) {
  let ajaxPromiseHelper = {};
  let originalHelper = require('./ajax-helper');

  ajaxPromiseHelper.post = function (url, param) {
    return new Promise((resolve, reject)=> {
      originalHelper.post(url, param)
        .done((response)=> {
          resolve(response);
        }).fail((error)=> {
        reject(error);
      });
    });
  };

  ajaxPromiseHelper.get = function (url, param) {
    return new Promise((resolve, reject)=> {
      originalHelper.get(url, param)
        .done((response)=> {
          resolve(response);
        }).fail((error)=> {
        reject(error);
      });

    });
  };

  return ajaxPromiseHelper;
})(window.jQuery);