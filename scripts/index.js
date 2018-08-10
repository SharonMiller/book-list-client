'use strict';
var app = app || {};

(function (module){

  let herokuURL = 'https://sm-ah-cc-booklist.herokuapp.com';
  let localURL = 'http://localhost:3000';

  module.isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  module.ENVIRONMENT = {

    apiURL: module.isLocal ? localURL : herokuURL

  };

  module.showOnly = function(selector) {
    $('.container').hide();
    $(selector).fadeIn(750);
  };

  module.render = function (templateId, data) {
    let template = Handlebars.compile($(`#${templateId}`).text());
    return template(data);
  };

  //ADD get for books here.

})(app);
