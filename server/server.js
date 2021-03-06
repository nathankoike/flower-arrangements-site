const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const deliver = require("./deliver")

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// accept the state of the site and return relevant information
app.post("*", (req, res) => {
  res.send({ data: deliver(req.body.pageState)});
});

// catch all
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "/../src/index.html"),
    (err) => {if (err) console.log(err)}
  );
});

app.use(express.static('../build'));

app.listen(port, () => console.log(`listening on port ${port}`));
