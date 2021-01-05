const fs = require('fs');
const Langs = require('../langs.js');

// return a json object of the proper page data
function deliver(page, pageState) {
  console.log(pageState);

  // console.log(0, Langs[lang])
  return Langs[0];
}


module.exports = deliver;
