const mongoose = require('mongoose')
require('dotenv').config()

const password = process.env.MONGO_API_KEY

const url =
  `mongodb+srv://fullstack:${password}@cluster0.amq2s.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'GET and POST are the most important methods of HTTP protocol',
  date: new Date(),
  important: true,
})

/*
note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})
*/

Note.find({ important: true }).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})