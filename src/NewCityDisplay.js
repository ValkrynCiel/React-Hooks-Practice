import React, {useState} from 'react';
import Title from './Title';
import CityLookupForm from './CityLookupForm';

const NewCityDisplay = () => {
  const [city, updateCity] = useState('');
  const [country, updateCountry] = useState('');

  const updateCityInfo = async ({cityName, countryName}) => {
    try {
      const countryResp = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fields=name;alpha2Code`);
      const countryInfo = await countryResp.json();
      const {alpha2Code, name} = countryInfo[0];
      const weatherResp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${alpha2Code}&appid=318bc9baa109f7aee9113d2a80134751&units=imperial`)
      const city = await weatherResp.json();
      updateCity(city.name)
      updateCountry(name);
    } catch (err){
      console.log('error');
    }
  }

  return (
    <div>
     <CityLookupForm handleSubmit=               {updateCityInfo}/>
      <Title city={city} country={country}/>
    </div>
  )
}

export default NewCityDisplay;