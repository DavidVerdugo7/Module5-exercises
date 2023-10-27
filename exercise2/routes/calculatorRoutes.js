const express = require("express");
const router = express.Router();

// suma
router.get("/add", (req, res) => {
  console.log(req.query);
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 + num2;

  res.status(200).json({ result: result });

  // res.send("result = " + result);
});

//resta
router.get("/substract", (req, res) => {
  // res.send("Add");
  console.log(req.query);
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 - num2;

  res.status(200);
  res.json({ result: result });
});

//multiplica
router.get("/multiply", (req, res) => {
  console.log(req.query);
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 * num2;

  res.status(200);
  res.json({ result: result });
});

//dividir

router.get("/divide", (req, res) => {
  console.log(req.query);
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = num1 / num2;

  res.status(200);
  res.json({ result: result });
});

module.exports = router;
