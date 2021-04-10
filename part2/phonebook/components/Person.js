import React from 'react'

const Person = ({ persons, newSearch }) => {

     const updatedPersons = persons.filter(person =>
       person.content.toLowerCase().includes(newSearch.toLowerCase())).map(filteredContent =>
         <div key={filteredContent.id}>{filteredContent.content} {filteredContent.number}</div>)

     console.log(persons)
     return (
       <div>
       {updatedPersons}
       </div>
     )
  }

export default Person
