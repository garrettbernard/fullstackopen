import React from 'react'

const SearchBox = ({ setNewSearch, newSearch }) => {
  const handleSearch = (event) => {
    setNewSearch(event.target.value)
  }
  return(
    <div>
      find countries <input value={newSearch} onChange={handleSearch} />
    </div>
  )
}

export default SearchBox
