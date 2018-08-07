"use strict";

var app = app || {};

(function (module) {

  function Book(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  };

  Book.all = [];

  Book.prototype.toHtml = function () {

    let template = Handlebars.compile($('book-template')).text();

    return template(this);
  }

  Book.fetchAll = function (callback) {
    $.get('/api/v1/books')
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(errorCallback);
  }

  Book.loadAll = function (rows) {
    rows
      .sort((a, b) => b.title - a.title)
      .map(row => Book.all.push(new Book(row)));
  }

  module.Book = Book;

})(app);