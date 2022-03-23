const express = require('express');
const router = express.Router();
const Author = require("../models/author.model")

// GET
router.get("/", async (req, res) => {
    const authors = await Author.find();
    res.status(200).json(authors);
})

// GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        res.status(200).json(author);
    } catch (error) {
        console.log(error);
    }
})

// GET BY ID for books
router.get("/:id/books", async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        res.status(200).json(author.books);
    } catch (error) {
        console.log(error);
    }
})

// POST
router.post("/", async (req, res) => {
    try {
        const createdAuthor = await Author.create(req.body);
        res.status(200).json(createdAuthor)
    } catch (error) {
        console.log(error)
    }
})

// EDIT
router.patch("/:id", async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(updatedAuthor);
    } catch (error) {
        console.log(error);
    }
})

//  DELETE
router.delete("/:id", async (req, res) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedAuthor);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
