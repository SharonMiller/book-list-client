'use strict';
var app = app || {};

(function (module){

  module.ENVIRONMENT = {

    herokuURL: 'https://sm-ah-cc-booklist.herokuapp.com',
    localURL: 'localhost:3000',
    apiURL: Location.protocol.includes('localhost') ? this.localURL : this.herokuURL

  };

})(app);
