import React from 'react'

const Person = ({ persons, newSearch, toggleDelete }) => {

     const updatedPersons = persons.filter(person =>
       person.name.toLowerCase().includes(newSearch.toLowerCase())).map(filteredContent =>
         <div key={filteredContent.id}>
            {filteredContent.name} {filteredContent.number} <button onClick={ () => window.confirm(`Delete ${filteredContent.name} ?`) ? toggleDelete(filteredContent.id) : null }>Delete</button>
         </div>
       )

     return (
       <div>
       {updatedPersons}
       </div>
     )
  }

export default Person
