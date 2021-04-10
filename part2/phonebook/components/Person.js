import React from 'react'

const Person = ({ persons, newSearch }) => {

     const updatedPersons = persons.filter(person =>
       person.name.toLowerCase().includes(newSearch.toLowerCase())).map(filteredContent =>
         <div key={filteredContent.id}>{filteredContent.name} {filteredContent.number}</div>)

     return (
       <div>
       {updatedPersons}
       </div>
     )
  }

export default Person
