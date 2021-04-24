import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetWeather = ({ capital }) => {
  const [ weather, setWeather ] = useState()
  useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current', {
        params: {
          access_key: process.env.REACT_APP_WEATHER_APP,
          query: capital
        }
      })
      .then(response => {
        setWeather(response.data)
      })
  }, [capital])

    if (weather !== undefined) {
      return (
        <div>
          <h3>Weather in {capital}</h3>
          <div>temperature: {weather.current.temperature} Celcius</div>
          <div>wind: {weather.current.wind_speed} mph at direction {weather.current.wind_dir}</div>
        </div>
      )
      } else {
        return (
          <div>
            <h3>No weather available</h3>
          </div>
        )
      }
}

const ListCountries = ({ countries, newSearch, setNewSearch, setWeather, weather }) => {

   const updatedCountries = countries.filter(country =>
     country.name.toLowerCase().includes(newSearch.toLowerCase())).map(filteredContent =>
       <div key={filteredContent.numericCode}>
        {filteredContent.name}
          <button type="submit" onClick={ () => setNewSearch(filteredContent.name) }>show</button>
      </div>
    )


  if (updatedCountries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )
  } else if (updatedCountries.length <= 10 && updatedCountries.length > 1) {
     return (
       <div>{updatedCountries}</div>
     )
  } else {
    const soloCountry = countries.filter(country =>
      country.name.toLowerCase().includes(newSearch.toLowerCase())).map(filteredContent =>
        <div key={filteredContent.numericCode}>
          <h2>{filteredContent.name}</h2>
          <div>capital {filteredContent.capital}</div>
          <div>population {filteredContent.population}</div>
          <h3>languages</h3>
          <ul>
            { filteredContent.languages.map(language => <li key={language.iso639_1}>{language.name}</li>) }
          </ul>
          <img src={filteredContent.flag} alt='flag' width="100" height="100" />
          <GetWeather capital={filteredContent.capital} setWeather={setWeather} weather={weather} />
          </div>)

        return (
          <div>{soloCountry}</div>
        )
  }

}

export default ListCountries
