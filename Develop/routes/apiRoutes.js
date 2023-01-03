const router = require("express").Router();
const fs = require("fs");
// Helper method for generating unique ids
const uuid = require("../helpers/uuid");

router.get("/", (req, res) => {
  res.json(`${req.method} REQUEST RECEIVED`);
});
router.post("/", (req, res) => {
  res.json(`${req.method} REQUEST RECEIVED`);
});

//how to read and write from the database

module.exports = router;
