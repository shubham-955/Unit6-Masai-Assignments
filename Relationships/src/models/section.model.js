const mongoose = require("mongoose");
const { Schema } = mongoose;

const sectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'book',
        }
    ]
}, {
    versionKey: false,
    timestamps: true
});

const Section = mongoose.model("section", sectionSchema);
Section.createIndexes();
module.exports = Section;
