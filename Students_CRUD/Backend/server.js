const express = require('express')
const students = require('./students.json')
const PORT = 8000;
const fs = require("fs")

let app = express();
app.use(express.json())

// GET
app.get("/students", async (req, res) => {
    res.json(students)
})

// GET BY ID
app.get("/students/:id", async (req, res) => {
    const { id } = req.params;
    const student = students.find((student) => student.id === Number.parseInt(id))
    res.json(student);

})

// POST
app.post("/students", async (req, res) => {
    try {
        students.push(req.body)
        fs.writeFileSync("students.json", JSON.stringify(students))
        res.json(req.body)
    } catch (error) {
        console.log(error);
    }
})

// DELETE
app.delete("/students/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const updatedStudent = students.filter((student) => student.id !== id);
        fs.writeFileSync("students.json", JSON.stringify(updatedStudent))
        res.json(updatedStudent);
    } catch (error) {
        console.log(error);
    }
})

// EDIT
app.patch("/students/:id", async (req, res) => {
    try {
        const id = +req.params.id;
        const studentBody = req.body;
        const updatedStudent = students.map((student) => student.id === id ? studentBody : student);
        fs.writeFileSync("students.json", JSON.stringify(updatedStudent))
        res.json(updatedStudent);
    } catch (error) {
        console.log(error);
    }
})


app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})