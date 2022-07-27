const Post = require('../models/post.js');

function handleErr(res, err) {
   console.log(err);
   res.render('404.ejs');
}

const getComms = (req, res) => {
   Post
      .find()
      .sort({ createdAt: -1 }) // sorting from old to new
      .then((posts) => res.render('comments.ejs', { posts }))
      .catch((err) => handleErr(res, err));
};

const addComms = (req, res) => {
   const { text, name, email, theme } = req.body;
   const post = new Post({ text, name, email, theme });
   post.save()
      .then((result) => res.redirect('/comments')/* res.render('comments.ejs', { result }) */)
      .catch((err) => handleErr(res, err));
};

const deleteComms = (req, res) => {
   const id = (req.params.id).substr(1);
   Post
      .findByIdAndDelete(id)
      .then((result) => res.sendStatus(200))
      .catch((err) => handleErr(res, err));
};

module.exports = {
   getComms,
   addComms,
   deleteComms
}