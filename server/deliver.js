const fs = require('fs');

// return a json object of the proper page data
function deliver(page, pageState) {
  console.log(pageState);

  console.log(pageState.langs)

  console.log(0, pageState.langs[pageState.selectedLang])
  return pageState.langs[pageState.selectedLang];
}


module.exports = deliver;
