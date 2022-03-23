const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true,
    },
    authors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'author',
            required: true,
            min: 1
        }
    ],
    section:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'section',
        required: true
    },
    isCheckedOut: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

const Book = mongoose.model("book", bookSchema);
Book.createIndexes();
module.exports = Book;
