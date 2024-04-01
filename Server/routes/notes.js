const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { validationResult, body } = require('express-validator');

// ROUTE 1 : Get all The Notes Using : GET '/api/notes/fetchallnotes'. login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 2 : Add A New Notes Using : POST '/api/notes/addnote'. login required

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description must be atleast 8 characters').isLength({ min: 5 }),
    body('tag', 'Enter a tag')], async (req, res) => {
        try {
            // if ther are errors, return Bad request and the errors
            const { title, description, tag } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const SaveNote = await note.save()
            res.json(SaveNote)
        } catch (error) {
            console.error(error.massage);
            res.status(500).send("Internal Server Error")
        }
    })
// ROUTE 3 : Update an existing Note Using : PUT '/api/notes/updatenote:id'. login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    try {


        // Create a newNote object
        const newnote = {};
        if (title) { newnote.title = title };
        if (description) { newnote.description = description };
        if (tag) { newnote.tag = tag };

        // Find the note to be updated  and updated it
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }
        // Finmd a User 
        if (note.user && note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })

        res.json({ note })
    } catch (error) {
        console.error(error.massage);
        res.status(500).send("Internal Server Error")
    }
})

// ROUTE 4 : Delete an existing Note Using : Delete '/api/notes/deletenote:id'. login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {

        // Find the note to be delete  and delete it
        let note = await Note.findById(req.params.id)
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if User own this Note 
        if (note.user && note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)

        res.json({ "Success": "Note has been deleted", note: note })
    } catch (error) {
        console.error(error.massage);
        res.status(500).send("Internal Server Error")
    }
})

module.exports = router