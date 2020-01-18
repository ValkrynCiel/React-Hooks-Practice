import React from 'react';

const Title = (props) => {
  const {city, country, temp, weather} = props;
  return (
    city ? 
    <>
      <h1>{city}, {country}</h1> 
      <p>Temperature: {temp}</p>
      <p>Weather: {weather}</p>
    </>: 
    <h1>Nothing's here yet</h1>
  );
}

export default Title;