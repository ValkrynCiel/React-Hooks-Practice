import React, {useState} from 'react';
import Title from './Title';
import CityLookupForm from './CityLookupForm';

const NewCityDisplay = () => {
  const [city, updateCity] = useState({
    name: '',
    main: null,
    weather: null
  });
  const [country, updateCountry] = useState('');

  const updateCityInfo = async ({cityName: cityInput, countryName: countryInput}) => {
    try {
      const countryResp = await fetch(`https://restcountries.eu/rest/v2/name/${countryInput}?fields=name;alpha2Code`);
      const countryInfo = await countryResp.json();
      const {alpha2Code, name: countryName} = countryInfo[0];
      const weatherResp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput},${alpha2Code}&appid=318bc9baa109f7aee9113d2a80134751&units=imperial`)
      const {main, weather, name: cityName} = await weatherResp.json();
      updateCity({main, weather, name: cityName})
      updateCountry(countryName);
    } catch (err){
      console.log(err);
    }
  }

  return (
    <div>
     <CityLookupForm handleSubmit=               {updateCityInfo}/>
      <Title city={city.name && city.name} 
              country={country} 
              temp={city.main && city.main.temp} weather={city.weather && city.weather[0].main} />
    </div>
  )
}

export default NewCityDisplay;