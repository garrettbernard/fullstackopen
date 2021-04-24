import React from 'react'
import nameService from '../services/names'

const PersonForm = ({ persons, setPersons, newName, setNewName, newPhone,setNewPhone, setNewMessage }) => {
  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }

    const isDuplicate = persons.filter(person => person.name === newName).map(filteredID => filteredID.id)

    if (isDuplicate.length > 0) {
      if (window.confirm(newName + " is already added to phonebook. replace the old number with a new one?")) {

        const name = persons.find(n => n.id === isDuplicate[0])
        const changedName = { ...name, number: nameObject.number }

        nameService
          .update(isDuplicate[0], changedName)
          .then(returnedName => {
            setPersons(persons.map(name => name.id !== isDuplicate[0] ? name : returnedName))
            setNewMessage(`Updated ${nameObject.name}`)
        })
        .catch(error => {
          setNewMessage({
            message: `Information of ${nameObject.name} has already been removed from server`,
            type: 'error'
          })
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
        })

      } else {
        setNewName('');
        setNewPhone('');
      }
    } else {
      nameService
        .create(nameObject)
        .then(returnedNote => {
          setPersons(persons.concat(nameObject));
          setNewName('');
          setNewPhone('');
          setNewMessage({
            message: `Added ${nameObject.name}`,
            type: 'added'
          })
          setTimeout(() => {
            setNewMessage(null)
          }, 5000)
        })
    }
  }

  return (
    <>
        <form onSubmit={addName}>
          <div>name: <input value={newName} onChange={handleNameChange} /></div>
          <div>number: <input value={newPhone} onChange={handlePhoneChange} /></div>
          <div><button type="submit">add</button></div>
        </form>
    </>
  )
}

export default PersonForm
