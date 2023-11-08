const express = require("express");
const router = express.Router();
const calculatorController = require("../controllers/calculatorControllers");

// suma
router.get("/add", (req, res) => {
  calculatorController.add(req, res);
});

//resta
router.get("/subtract", (req, res) => {
  calculatorController.subtract(req, res);
});

//multiplica
router.get("/multiply", (req, res) => {
  calculatorController.multiply(req, res);
});

//dividir

router.get("/divide", (req, res) => {
  calculatorController.divide(req, res);
});

module.exports = router;
