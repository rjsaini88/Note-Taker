const router = require("express").Router();
const fs = require("fs");
// Helper method for generating unique ids
const uuid = require("../helpers/uuid");

router.get("/", (req, res) => {
  res.json(`${req.method} REQUEST RECEIVED`);
});
//Class notes video review 1:59
router.post("/", (req, res) => {
  res.json(`${req.method} REQUEST RECEIVED`);
  const { title, text } = req.body;
  if (title && text) {
    const newReview = { title, text, review_id: uuid() };
  }
});

//how to read and write from the database

//Get existing reviews
const existingReviews = fs.readFileSync("../db/db.json", "utf-8");
module.exports = router;
