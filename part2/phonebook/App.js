import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Person from './components/Person'
import nameService from './services/names'

const App = (props) => {
  const [ persons, setPersons ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [newMessage, setNewMessage] = useState([])

  useEffect(() => {
    nameService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
  }, [])

  const toggleDelete= id => {
    const name = persons.find(n => n.id === id)

    nameService
      .remove(id)
      .then(returnedName => {
        setPersons(persons.filter(name => name.id !== id))
    })
    .catch(error => {
      setNewMessage({
        message: `Information of ${name.name} has already been removed from server`,
        type: 'error'
      })
      setTimeout(() => {
        setNewMessage(null)
      }, 5000)
    })
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    console.log(message)
    return (
      <div className={message.type}>
        {message.message}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newMessage} />
      <Filter setNewSearch={setNewSearch} newSearch={newSearch} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newPhone={newPhone} setNewPhone={setNewPhone} setNewMessage={setNewMessage} />
      <Person persons={persons} newSearch={newSearch} toggleDelete={toggleDelete} />
    </div>
  )

}

export default App
