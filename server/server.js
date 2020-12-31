const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// catch all
app.get("*", (req, res) => {
  res.send('hello world')
});

app.use(express.static('./build'));

app.listen(port, () => console.log(`listening on port ${port}`));
