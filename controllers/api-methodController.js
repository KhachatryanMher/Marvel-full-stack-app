const Post = require('../models/post.js');

function handleErr(err, res){
    res.status(500).send(err.message);
}

const getComms = (req, res) => {
    Post
        .find()
        .sort( { createdAt: -1 } ) // sorting from old to new
        .then((posts) => res.status(200).json(posts))
        .catch((err) => handleErr(err, res));
};

const addComms = (req, res) => {
    const { text, name, email, theme } = req.body;
    const post = new Post({ text, name, email, theme });
    post
        .save()
        .then((post) => res.status(200).json(post))
        .catch((err) => handleErr(err, res));
};

const deleteComms = (req, res) => {
    const id = req.params.id;
    Post
        .findByIdAndDelete(id)
        .then(() => res.status(200).json(id))
        .catch((err) => handleErr(err, res));
};

const showComms = (req, res) => {
    const id = req.params.id;
    Post
        .findById(id)
        .then((post) => res.status(200).json(post))
        .catch((err) => handleErr(err));
};

const editComms = (req, res) => {
    const { text, name, email, theme } = req.body;
    const id = req.params.id;
    Post
        .findByIdAndUpdate(id, { text, name, email, theme }, { new: true })
        .then((post) => res.status(200).json(post))
        .catch((err) => handleErr(err));
};

module.exports = {
    getComms,
    addComms,
    deleteComms,
    showComms,
    editComms
}