import mongoose from "mongoose";

const Schema = mongoose.Schema;
const contactSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
});

const Contact = mongoose.model('Post', contactSchema);
export {
    Contact
}