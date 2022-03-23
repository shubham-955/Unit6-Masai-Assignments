const mongoose = require("mongoose");
const { Schema } = mongoose;

const authorSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        unique: true
    },
    last_name: {
        type: String,
        required: true,
    },
    // books: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'book',
    //     }
    // ]
}, {
    versionKey: false,
    timestamps: true
});

const Author = mongoose.model("author", authorSchema);
Author.createIndexes();
module.exports = Author;
