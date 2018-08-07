'use strict';
var app = app || {};

(function (module){

  let herokuURL = 'https://sm-ah-cc-booklist.herokuapp.com';
  let localURL = 'localhost:3000';

  module.isProduction = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  module.ENVIRONMENT = {


    apiURL: module.isProduction ? herokuURL : localURL

  };

  module.showOnly = (function() {
    $('.tab-content').hide();
    $('#book-view').fadeIn(750);
  })();

  module.render = (function () {
    module.bookView.initIndexPage();
  })();

})(app);
