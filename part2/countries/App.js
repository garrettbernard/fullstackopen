import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBox from './components/SearchBox'
import ListCountries from './components/ListCountries'

const App = () => {
    const [ countries, setCountries ] = useState([])
    const [ newSearch, setNewSearch ] = useState('')


  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


 return (
   <>
   <SearchBox setNewSearch={setNewSearch} newSearch={newSearch} />
   <ListCountries countries={countries} newSearch={newSearch} setNewSearch={setNewSearch} />
   </>
 )


}

export default App
