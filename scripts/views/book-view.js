'use strict';

var app = app || {};

(function (module) {

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

    $('#delete-book-btn').on('click', (event) => {
      event.preventDefault();
      module.Book.destroy($('#delete-book-btn').data('id'));
    })

    // event handler for update button
    $('#update-book-btn').on('click', (event) => {
      event.preventDefault();
      // we need to go to the update 
      module.showOnly('.update-form-view');

      $('#update-form-title').val(ctx.book.title);
      $('#update-form-author').val(ctx.book.author);
      $('#update-form-isbn').val(ctx.book.isbn);
      $('#update-form-img_url').val(ctx.book.img_url);
      $('#update-form-description').val(ctx.book.description);
    })
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

  }

  bookView.initUpdateFormPage = (ctx) => {
    module.showOnly('.update-form-view');
    // do something here with the form
    console.log('handling submit');
    $('#update-book-form').on('submit', (event) => {
      event.preventDefault();
      let t = event.target;
      let book = {
        title: t.title.value,
        author: t.author.value,
        isbn: t.isbn.value,
        img_url: t.img_url.value,
        description: t.description.value
      }
      console.log(book);
      module.Book.update(book);
    })

  }


  module.bookView = bookView;

})(app);
