'use strict';
var app = app || {};

(function (module){

  let herokuURL = 'https://sm-ah-cc-booklist.herokuapp.com';
  let localURL = 'localhost:3000';

  module.isProduction = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  module.ENVIRONMENT = {


    apiURL: module.isProduction ? herokuURL : localURL

  };

  module.showOnly = function(selector) {
    $('.container').hide();
    $(selector).fadeIn(750);
  };

  module.render = function (templateId, data) {
    let template = Handlebars.compile($(`#${templateId}`)).text();
    return template(data);
  };

})(app);
