module.exports = (function ($) {

  let identifier = {};

  identifier.getMockUser = function () {
    return $.cookie('app-user-id');
  };

  identifier.getUser = function () {
    throw new Error("not implemented");
  };

  return identifier;

})(window.jQuery);
