import React from 'react'

const Filter = ({ setNewSearch, newSearch }) => {
  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }
  return(
    <div>
      filter shown with <input value={newSearch} onChange={handleSearch} />
    </div>
  )
}

export default Filter
