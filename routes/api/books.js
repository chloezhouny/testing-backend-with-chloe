const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/", function(req, res) {
  console.log("SERVER ROUTE HIT");
  
  res.json({status: true, message: "SERVER MSG RECEIVED"})
})


module.exports = router;
