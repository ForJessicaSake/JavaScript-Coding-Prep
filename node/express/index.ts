const express = require("express");

const app = express();

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

app.get("*", (req, res) => {
  res.send("This route cannot be found");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
