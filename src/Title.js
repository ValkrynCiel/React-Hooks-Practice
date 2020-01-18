import React from 'react';

const Title = (props) => {
  const {city, country} = props;
  return (
    city ? 
    <h1>{city}, {country}</h1> : 
    <h1>Nothing's here yet</h1>
  );
}

export default Title;