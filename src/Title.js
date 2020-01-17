import React, {useState, useEffect} from 'react';

export default function Title(props) {
  
  const [city, updateCity] = useState('');

  useEffect(() => {
    const getCountry = async () => {
      const resp = await fetch('https://restcountries.eu/rest/v2/name/united%20states?fields=name;alpha2Code');
      const data = await resp.json();
      const { alpha2Code, name } = data[1];
      const weatherResp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=paris,${alpha2Code}&appid=318bc9baa109f7aee9113d2a80134751&units=imperial`)
      const city = await weatherResp.json();
      updateCity(`${city.name}, ${name}`);
    }
    getCountry();
  }, [])

  return (
    <h1>
      {city}
    </h1>
  );
}