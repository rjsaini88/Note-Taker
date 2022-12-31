const router = require("express").Router();

router.get("/", (req, res) => {
  res.json(`${req.method} REQUEST RECEIVED`);
});
router.post("/", (req, res) => {
  res.json(`${req.method} REQUEST RECEIVED`);
});

module.exports = router;
