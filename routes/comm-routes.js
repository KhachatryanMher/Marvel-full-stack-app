const express = require('express');
const { getComms, addComms, deleteComms } = require('../controllers/methodController.js');


const router = express.Router();

router.get('/comments', getComms);
router.post('/comments', addComms);
router.delete('/comments/:id', deleteComms);

module.exports = router;