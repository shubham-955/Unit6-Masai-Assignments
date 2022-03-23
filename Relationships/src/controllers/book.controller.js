const express = require('express');
const router = express.Router();
const Book = require("../models/book.model")

// GET
router.get("/", async (req, res) => {
    const { isCheckedOut, author, section } = req.query;
    let criteria = {}
    if (isCheckedOut) {
        criteria.isCheckedOut = isCheckedOut
    }
    if (author) {
        criteria.authors = author
    }
    if (section) {
        criteria.section = section
    }
    const books = await Book.find(criteria);
    res.status(200).json(books);
})

// GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        console.log(error);
    }
})

// POST
router.post("/", async (req, res) => {
    try {
        const createdBook = await Book.create(req.body);
        res.status(200).json(createdBook)
    } catch (error) {
        console.log(error)
    }
})

// EDIT
router.patch("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(updatedBook);
    } catch (error) {
        console.log(error);
    }
})

//  DELETE
router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedBook);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
