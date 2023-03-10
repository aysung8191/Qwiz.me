const Note = require('../../models/flashcard')

module.exports = {
    index,
    create
}

async function index(req, res) {
    let flashcards = []
    if (req.user) {
        flashcards = await Flashcard.find({user: req.user._id})
    }
    res.json(flashcards)  
    // return notes
}

async function create(req,res) {
    const flashcard = await Flashcard.create(req.body.flashcard)
    res.json(flashcard)
}