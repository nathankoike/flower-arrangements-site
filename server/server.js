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

// accept the state of the site and return information for the home page
app.post("/home", (req, res) => {
  res.send({ pageData: deliver('/home', req.body.pageState)});
});

// accept the state of the site and return information for the home page
app.post("/portfolio", (req, res) => {
  res.send({ pageData: 'portfolio'});
});

// accept the state of the site and return information for the home page
app.post("/about", (req, res) => {
  res.send({ pageData: 'about'});
});

// accept the state of the site and return  information for the home page
app.post("/contact", (req, res) => {
  res.send({ pageData: 'contact'});
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
