'use strict';

var app = app || {};

(function (module) {

  const adminView = {};

  adminView.initAdminPage = () => {
    console.log('init admin page');
    module.showOnly('.admin-form-view');
    $('#tryAgain').hide();
    $('#admin-form').on('submit', (event) => {

      event.preventDefault();
      if (event.target.passphrase.value === "password") {

        $('detail-btn-container').children().show();
        page(() => page('/'));

      } else {

        $('detail-btn-container').children().hide();
        $('#admin-form').trigger("reset");
        $('#tryAgain').show();

      }
    });
  }
  module.adminView = adminView;

})(app);