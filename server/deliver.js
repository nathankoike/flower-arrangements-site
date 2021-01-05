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
        let files = fs.readdirSync(path.join(filePath, "/img"));

        // an array that will contain the image url and the accompanying text
        let ary = [];

        // for every file
        for (let i = 0; i <= files.length; i++){
          // if the array has the necessary 2 pieces of data
          if (ary.length > 1){
            // add the array to our data json
            data.imgs.push(ary);

            // clear the array
            ary = [];
          }
          // if the file is not a .jpg
          if (!(/jpg/.test(files[i]))) {
            ary.push(fs.readFileSync(
              path.join(filePath, '/img', files[i]),
              'utf8'));
          }
          // if the file is a .jpg just add its filepath
          else ary.push(path.join(filePath, '/img', files[i]));
        }
      }
    }
    catch(e) {
      console.log(e);
    }

    return data;
  }
  catch (err) {
    console.log(err);
  }
}


module.exports = deliver;
