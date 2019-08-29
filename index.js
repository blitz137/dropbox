var fetch = require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: 'XrnXFzbAqt8AAAAAAAAASp2S2mprBk9u2c600PZfnCMDF6hhhhe2UVwSvoNJIQO6', fetch: fetch });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });