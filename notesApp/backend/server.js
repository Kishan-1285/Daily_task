import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Note from './models/Note.js';

app.use(cors);
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/simple_notes")
    .then(() => {
        console.log("mongodb is connected");
    })
    .catch((error) => {
        console.log("Mongodb connectError", error);
    });

app.post('/notes', async (req, res) => {
    try {
        const newNote = new Note({
            text: req.body.text
        });
        const savedNote = await newNote.save();
        res.status(201).json({
            message: "Note created successfully",
            data: savedNote
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});
   


app.listen(3000, () => {
    console.log("App is running on the port 3000");
})

