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

    // do something here with the form
    $('#add-book-form').on('submit', (event) => {
      event.preventDefault();
      let t = event.target;
      let book = {
        title: t.title.value,
        author: t.author.value,
        isbn: t.isbn.value,
        img_url: t.img_url.value,
        description: t.description.value
      }
      module.Book.create(book);
    })

    // create a book
  }

  module.bookView = bookView;

}) (app);
