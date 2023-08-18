const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let todos = [];
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    description: req.body.description,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
