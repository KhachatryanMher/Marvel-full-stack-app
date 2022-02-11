const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const postSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    theme: {
        type: String
    }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;