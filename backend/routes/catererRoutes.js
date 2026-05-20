const express = require("express");

const router = express.Router();

const {
  getCaterers,
  getCatererById,
  createCaterer,
} = require("../controllers/catererController");

router.get("/", getCaterers);

router.get("/:id", getCatererById);

router.post("/", createCaterer);

module.exports = router;