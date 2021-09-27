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




var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
