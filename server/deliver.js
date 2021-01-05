const path = require('path');
const fs = require('fs');

// return a json object of the proper page data
function deliver(pageState) {
  // store the filenames that will be loaded for each page
  const fnames = ['en.txt', 'jp.txt'];

  // load text data from the appropriate file
  try {
    const data = fs.readFileSync(
      path.join(__dirname, './src' + pageState.path + '/' + fnames[pageState.selectedLang]),
      'utf8');

    return data;
  }
  catch (err) {
    console.log(err);
  }
}


module.exports = deliver;
