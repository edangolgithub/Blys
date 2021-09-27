var express = require("express");
var cors = require('cors')
const { getResponse } = require("./validation");
var app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", function (req, res) { 
  res.send("Hello Blys");
});


app.post("/", function (req, res) {
  var input = req.body.code;
  resp = getResponse(input);
  res.send(resp);
});

// This responds a DELETE request for the /del_user page.
app.delete("/del_user", function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send("Hello DELETE");
});

// This responds a GET request for the /list_user page.
app.get("/list_user", function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send("Page Listing");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
