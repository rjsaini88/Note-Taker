const router = require("express").Router();
const fs = require("fs");
// Helper method for generating unique ids
const uuid = require("../helpers/uuid");

const existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
router.get("/", (req, res) => {
  // const existingNotes = fs.readFileSync("./db/db.json", "utf-8");
  // res.json(JSON.parse(existingNotes));
  // res.json(`${req.method} REQUEST RECEIVED`);
  res.json(existingNotes);
});

router.post("/", (req, res) => {

  const { title, text } = req.body;
  if (title && text) {
    const newNote = { 
      title, 
      text, 
      id: uuid() 
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


// router.delete('/:id', function (req, res) {
//   const newNotes = existingNotes.filter(note) => {
//     return note.id !== req.params.noteId;}
// // let id = req.params.noteId;

//   });
// fs.writefile('./db/db.json', JSON.stringify(newNotes), (err) =>
// err
//   ? console.error(err)
//   : console.log(`Your note has been deleted. `}
//   );


//Need explanation on this
// router.delete('/:id', function(req, res) {
//   let data = fs.readFileSync('./db/db.json', 'utf8');
//   const dataFromJSON = JSON.parse(data)
//   const newNote = dataFromJSON.filter(note) => {
//     return note.id !== req.params.id;
//   });
//   fs.writeFile('./db/db.json', JSON.stringify(newNote), (err) =>{
//      err
//      ? console.error(err)
//        : console.log(`Your note has been deleted.) `
//   }); 

  
module.exports = router;
