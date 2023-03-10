const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/flashcards');

router.get('/', flashcardsCtrl.index);
router.post('/', flashcardsCtrl.create)

module.exports = router;