const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("School API irakora 🚀");
});

let students = [
  { id: 1, name: "Jean" },
  { id: 2, name: "Aline" }
];

app.get('/students', (req, res) => {
  res.json(students);
});


app.post('/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(3000, () => {
  console.log("School API running on http://localhost:3000");
});