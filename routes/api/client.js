const router = require("express").Router();
// const booksController = require("../../controller/booksController");

// Matches with "/api/books"
router.route("/")
  .get(function(req, res){
      console.log("working");
  })

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
