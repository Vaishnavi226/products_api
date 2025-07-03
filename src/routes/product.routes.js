const router = require("express").Router();

router.get("/", (req, res) => {
  // this is kind of a function
  res.status(200).send("Success"); // this is kind of return statement
});

router.get("/add", (req, res) => {
  // this is kind of a function
  let a = 2;
  let b = 5;
  sum = a + b;
  console.log(req);
  res.send(sum);
});

router.post("/add", (req, res) => {
  // req se lenge variables
  const a = req.body.a;
  const b = req.body.b;
  res.send(a + b);
  // then add them
});

router.post("/name", (req, res) => {
  const name = req.body.name;
  res.send(`Good Morning ${name}`);
});

module.exports = router;

// syntax
// router.method("path", controller_funtion);
