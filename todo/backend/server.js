import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Note from './models/Note.js';

app.use(cors);
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/simple_notes")
   .then(()=>{
    console.log("mongodb is connected");
   })
   .catch((error)=>{
    console.log("Mongodb connectError",error);
   });

app.post()


app.listen(3000,()=>{
    console.log("App is running on the port 3000");
})

