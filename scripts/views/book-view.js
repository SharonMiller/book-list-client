'use strict';

var app = app || {};

(function (module){

  let bookView = {};

  bookView.initIndexPage = () => {
    $('#book-list').empty();
    module.showOnly('.book-view')
    app.Book.all.map(book => $('#book-list').append(module.render('book-template', book)));
  }

  bookView.initDetailPage = (ctx) => {
    $('#detail-view').empty();
    module.showOnly('.detail-view')
    $('#detail-view').append(module.render('detail-view-template', app.Book.all[0]));
  }
  
  bookView.initFormPage = () => {
    module.showOnly('.form-view');
  }
  module.bookView = bookView;

}) (app);
