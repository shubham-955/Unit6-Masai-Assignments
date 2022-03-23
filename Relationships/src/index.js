const express = require('express')
const connectToMongo = require('./db')
const cors = require("cors");

const authorController = require('./controllers/author.controller')
const sectionController = require('./controllers/section.controller')
const bookController = require('./controllers/book.controller')

const PORT = 8000;

connectToMongo()
let app = express();
app.use(express.json())
app.use(cors())

app.use("/authors", authorController);
app.use("/sections", sectionController);
app.use("/books", bookController);

app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
})