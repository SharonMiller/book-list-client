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

  Book.prototype.toHtml = function () {

    let template = Handlebars.compile($('#book-template').text());

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
    rows
      .sort((a, b) => b.title - a.title)
      .map(row => Book.all.push(new Book(row)));
  }

  Book.fetchOne = function (callback) {
    $.get(`${module.ENVIRONMENT.apiURL}/api/v1/books/:id`)
    .then(results => {
      Book.loadAll(results);
      callback();
    })
    .catch(errorCallback);
  }

  Book.createBook = function (callback) {
    $.post(`${module.ENVIRONMENT.apiURL}/api/v1/books/add`)
    .then( () => page('/'))
    .catch(errorCallback);
  }

  module.Book = Book;

})(app);