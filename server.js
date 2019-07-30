const express = require("express");

// const routes = require("./routes");

//Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
// app.use(routes);


app.get("/", function(req, res) {
  console.log("SERVER GET ROUTE HIT");
  res.json({status: true, message: "CLIENT GET RECEIVED"})
})

app.post("/", function(req, res) {
  console.log("RECEIVED CLIENT REQ.BODY: ", req.body);
  res.json({status: "ok", msg: "Got your post request"})
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
