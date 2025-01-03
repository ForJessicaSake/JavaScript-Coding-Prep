const express = require("express");

//Initialize Express
const app = express();
const port = 3000;

//express routing
app.get("/", (req, res) => {
  res.send("Welcome to the pet shop");
});

app.get("/cats", (req, res) => {
  res.send({
    cats: [
      { name: "fluffy", age: 2 },
      { name: "kitty", age: 1 },
      { name: "tiger", age: 3 },
    ],
  });
});

app.get("/dogs", (req, res) => {
  res.send({
    dogs: [
      { name: "spot", age: 2 },
      { name: "braden", age: 4 },
      { name: "max", age: 5 },
    ],
  });
});

app.post("/cats", (req, res) => {
  res.send({
    name: "molly",
    age: 2,
  });
});

app.post("/dogs", (req, res) => {
  res.send({
    name: "cooper",
    age: 2,
  });
});

//catch all route when a path does not exist
// app.get("*", (req, res) => {
//   res.send("This route cannot be found");
// });

//dynamic routing
app.get("/cats/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send(`cat with id ${id}`);
});

//route with query parameters
app.get("/cats", (req, res) => {
  const { q } = req.query;
  console.log(q);
  res.send(`searching for ${q}`);
});

//listening on port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
