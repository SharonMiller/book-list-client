"use strict";

var app = app || {};

(function (module) {
  let errorCallback = (err) => {
    console.error(err);
    module.errorView.initErrorPage(err);
  } 

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  };

  Book.all = [];

  Book.prototype.toHtml = function (templateId) {

    let template = Handlebars.compile($(templateId).text());

    return template(this);
  }

  Book.fetchAll = function (callback) {
    $.get(`${module.ENVIRONMENT.apiURL}/api/v1/books`)
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(errorCallback);
  }

  Book.loadAll = function (rows) {
    Book.all = [];
    rows
      .sort((a, b) => b.title - a.title)
      .map(row => Book.all.push(new Book(row)));
  }

  Book.fetchOne = function (ctx, callback) {
    $.get(`${module.ENVIRONMENT.apiURL}/api/v1/books/${ctx.params.id}`)
    .then(results => {
      Book.all = [];
      ctx.book = results[0];
      Book.loadAll(results);
      callback(ctx);
    })
    .catch(errorCallback);
  }

  Book.create = function (book, callback) {
    $.post(`${module.ENVIRONMENT.apiURL}/api/v1/books/add`, book)
    .then( () => page('/'))
    .catch(errorCallback);
  }

  Book.destroy = function (ctx, callback) {
    $.ajax({url: `${module.ENVIRONMENT.apiURL}/api/v1/books/delete/${ctx}`, method: 'DELETE'})
    .then( () => page('/'))
    .catch(errorCallback);
  }

  Book.update = function (ctx, callback) {
    $.ajax({url: `${module.ENVIRONMENT.apiURL}/api/v1/books/update/${ctx.id}`, method: 'PUT'})

  }

  module.Book = Book;

})(app);