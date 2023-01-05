const router = require("express").Router();
const fs = require("fs");
// Helper method for generating unique ids
const uuid = require("../helpers/uuid");

router.get("/", (req, res) => {
  res.json(`${req.method} REQUEST RECEIVED`);
});

router.post("/", (req, res) => {
  res.json(`${req.method} REQUEST RECEIVED`);

  const { title, text } = req.body;
  if (title && text) {
    const newNote = { title, text, note_id: uuid() };
    // }
    // });

    //how to read and write from the database

    //Get existing reviews
    const existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

    existingNotes.push(newNote);

    fs.writeFileSync(`./db/db.json`, JSON.stringify(existingNotes), (err) =>
      err
        ? console.error(err)
        : console.log(`Your note ${newNote.title} has been saved. `)
    );

    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in adding the note");
  }
});

module.exports = router;
