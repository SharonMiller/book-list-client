'use strict';

var app = app || {};

(function (module){

  let bookView = {};

  bookView.initIndexPage = () => {
    module.showOnly('.book-view')
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }



  module.bookView = bookView;

}) (app);

$(document).ready(function(){
  app.Book.fetchAll(app.bookView.initIndexPage)});