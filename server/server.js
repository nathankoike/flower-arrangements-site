const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// catch all
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/../src/index.html"),
    (err) => {if (err) console.log(err)}
  );
});

app.use(express.static('../build'));

app.listen(port, () => console.log(`listening on port ${port}`));
