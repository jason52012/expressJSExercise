const expess = require("express");
const app = expess();
const path = require("path");

// for server retrieve static resources such as css..
app.use(expess.static("public"));

// for post request parse param
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// routing for index
app.get("/", (req, res) => {
  // return a sentence on you page
  res.send("Welcome");
});

app.get("/welcome", (req, res) => {
  res.status(302);
  // return a file context on you page
  res.sendFile(path.join(__dirname, "move.html"));
});

// post request param put into request body. Thus, need body-parser to parse
// app.post("/submit", (req, res) => {
//   let { name, age } = req.body; // Destructuring assignment
//   res.send(`name = ${name}, age= ${age}`);
// });

// get request param put into request url
app.get("/submit", (req, res) => {
  let { name, age } = req.query; // Destructuring assignment
  res.send(`name = ${name}, age= ${age}`);
});

// routing for all
app.get("*", (req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "error.html"));
  console.log(res.statusCode);
});

// for listening request port
app.listen("3501", () => {
  console.log("3501 is running.");
});
