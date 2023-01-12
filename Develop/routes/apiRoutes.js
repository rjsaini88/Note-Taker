const router = require("express").Router();
const fs = require("fs");
// Helper method for generating unique ids
const uuid = require("../helpers/uuid");

router.get("/", (req, res) => {
  const existingNotes = fs.readFileSync("./db/db.json", "utf-8");
  res.json(JSON.parse(existingNotes));
  // res.json(`${req.method} REQUEST RECEIVED`);
});

const existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
router.post("/", (req, res) => {
  res.json(`${req.method} REQUEST RECEIVED`);

  const { title, text } = req.body;
  if (title && text) {
    const newNote = { 
      title, 
      text, 
      noteId: uuid() 
    };

    //how to read and write from the database

    //Get existing reviews

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

//delete notes
// router.delete('/', (req, res) =>{
// let id = req.params.noteId;

// });

module.exports = router;
