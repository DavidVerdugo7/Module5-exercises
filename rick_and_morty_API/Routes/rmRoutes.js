// rmRoutes.js
const express = require("express");
const router = express.Router();

const rmControllers = require("../controllers/rmControllers");

router.get("/characters", (req, res) => {
  rmControllers.getCharacters(req, res);
});

module.exports = router;
