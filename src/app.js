// server ko create karna
const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

/* title, description */
/* POST /notes*/ 
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "note created successfully",
  });
});

// GET / notes/
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetched successfully",
    notes: notes,
  });
});

/* delete /notes/2 */

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index; // 2
  notes.splice(index, 1);
  res.status(200).json({
    message: "notes deleted successfully",
  });
});


app.patch("/notes/:index", (req, res)=>{
  const index = req.params.index
  const title = req.body.title
  const description = req.body.description 
  notes[index].title = title
      notes[index].description = description
  res.status(200).json({
          message : "note updated successfully"
        })
})

module.exports = app;
