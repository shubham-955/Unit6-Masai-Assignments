const express = require('express');
const Book = require('../models/book.model');
const router = express.Router();
const Section = require("../models/section.model")

// GET
router.get("/", async (req, res) => {
    const sections = await Section.find();
    res.status(200).json(sections);
})

// GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const section = await Section.findById(req.params.id);
        res.status(200).json(section);
    } catch (error) {
        console.log(error);
    }
})

// GET books By Id 
router.get("/:id/books", async (req, res) => {
    try {
        const { isCheckedOut } = req.query;
        let criteria = {
            section: req.params.id
        }
        if (isCheckedOut) {
            criteria.isCheckedOut = isCheckedOut
        }
        const books = await Book.find(criteria);
        res.status(200).json(books);
    } catch (error) {
        console.log(error);
    }
})

// POST
router.post("/", async (req, res) => {
    try {
        const createdSection = await Section.create(req.body);
        res.status(200).json(createdSection)
    } catch (error) {
        console.log(error)
    }
})

// EDIT
router.patch("/:id", async (req, res) => {
    try {
        const updatedSection = await Section.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json(updatedSection);
    } catch (error) {
        console.log(error);
    }
})

//  DELETE
router.delete("/:id", async (req, res) => {
    try {
        const deletedSection = await Section.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedSection);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
