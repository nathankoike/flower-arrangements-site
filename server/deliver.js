const path = require('path');
const fs = require('fs');

// return a json object of the proper page data
function deliver(pageState) {
  // store the filenames that will be loaded for each page
  const fnames = ['en.txt', 'jp.txt'];

  const filePath = path.join(
    __dirname,
    './src' + pageState.path + '/');

  // all the data to send back
  let data = { imgs: [] };

  try {
    // try to load text data from the appropriate file
    data.text = fs.readFileSync(
      path.join(filePath, fnames[pageState.selectedLang]),
      'utf8');

    // check for more data
    try {
      // if there is an image subdirectory
      if (fs.existsSync(path.join(filePath, "/img"))) {
        // get all the filenames
        fs.readdirSync(path.join(filePath, "/img")).forEach(file => {
          // if the file is a .jpg
          console.log(file);
        });
      }
    }
    catch(e) {
      console.log("An error occurred.");
    }

    return data.text;
  }
  catch (err) {
    console.log(err);
  }
}


module.exports = deliver;
