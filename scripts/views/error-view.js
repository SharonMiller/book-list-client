'use strict';

var app = app || {};

(function (module){

  let errorView = {};

  errorView.initErrorPage = (err) => {
    $('.error-view').empty();
    module.showOnly('.error-view')
    module.render(error-view-template, err);
  }

  module.errorView = errorView;

}) (app);
