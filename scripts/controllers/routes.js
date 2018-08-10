'use strict';

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add/', ctx => app.bookView.initFormPage());
page('/books/:id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/books/update/:id', ctx => {console.log('routes'); app.Book.fetchOne(ctx, next)}, ctx => app.bookView.initUpdateFormPage(ctx));
page();