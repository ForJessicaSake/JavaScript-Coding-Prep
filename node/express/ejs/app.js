const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

//serving static files from the public folder
app.use(express.static(path.join(__dirname, "public")));

//displaying dynamic variables in ejs files
app.get("/cats/:cat", (req, res) => {
  const { cat } = req.params;
  const age = Math.floor(Math.random() * 9) + 1;
  res.render("cat.ejs", { title: cat, age });
});

app.listen(port, () => console.log("server is running on port ${port}"));

//post request body type middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get request
app.get("/cats", (req, res) => {
  const cats = [
    { name: "Luna", color: "black", age: 11 },
    { name: "Oreo", color: "orange", age: 6 },
    { name: "Shadow", color: "white", age: 11 },
    { name: "Oreo", color: "calico", age: 7 },
    { name: "Mittens", color: "orange", age: 1 },
  ];
  res.render("cats.ejs", { title: "Cats", cats });
});

//post request
app.post("/cats", (req, res) => {
  const { name, age, color } = req.body;
  res.send(`${name} is ${age} years old and its stripes are ${color}`);
});
