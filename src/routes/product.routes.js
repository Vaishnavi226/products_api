const router = require("express").Router();

router.get("/", (req, res) => {
  // this is kind of a function
  res.status(200).send("Success"); // this is kind of return statement
});

router.get("/name", (req, res) => {
  res.send("Vaishnavi");
});

module.exports = router;

// syntax
// router.method("path", controller_funtion);
