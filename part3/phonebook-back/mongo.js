const mongoose = require('mongoose');
require('dotenv').config()


const password = process.env.MONGO_API_KEY
const name = process.argv[2]
const number = process.argv[3]


const url =
  `mongodb+srv://fullstack:${password}@cluster0.amq2s.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: String,
  date: Date,
})

const Phonebook = mongoose.model('Phonebook', phonebookSchema)

if (process.argv.length < 3) {
  Phonebook.find({ }).then(result => {
    console.log('phonebook:')
    result.forEach(phonebook => {
      console.log(`${phonebook['name']} ${phonebook['number']}`)
    })
    mongoose.connection.close()
  })
} else {
  const phonebook = new Phonebook({
    name: name,
    number: number,
    date: new Date(),
  })

  phonebook.save().then(result => {
    console.log(`added ${name} number ${number} to phonebook`)
    mongoose.connection.close();
  })
}
