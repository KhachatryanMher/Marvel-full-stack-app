const express = require('express');
const { getComms, addComms, deleteComms, showComms, editComms } = require('../controllers/api-methodController.js');


const router = express.Router();

router.get('/api/comments', getComms);
router.post('/api/comment', addComms);
router.delete('/api/comment/:id', deleteComms);
router.get('/api/comment/:id', showComms);
router.put('/api/comment/:id', editComms)

module.exports = router;