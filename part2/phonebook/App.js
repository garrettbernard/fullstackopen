import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Person from './components/Person'

const App = (props) => {
  const [ persons, setPersons ] = useState(props.staticNames)
  const [ newSearch, setNewSearch ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewSearch={setNewSearch} newSearch={newSearch} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newPhone={newPhone} setNewPhone={setNewPhone} />
      <h3>Numbers</h3>
      <Person persons={persons} newSearch={newSearch} />
    </div>
  )

}

export default App