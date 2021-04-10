import React from 'react'

const PersonForm = ({ persons, setPersons, newName, setNewName, newPhone,setNewPhone }) => {
  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      number: newPhone,
      id: persons.length + 1
    }

    const isDuplicate = persons.filter(person => person.content === newName).map(filteredName => filteredName.content)

    if (isDuplicate.length > 0) {
      window.alert(newName + " is already added to phonebook");
      setNewName('');
      setNewPhone('');
    } else {
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewPhone('');
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
