import React from 'react';
import useCityLookupForm from './CustomHooks';

const CityForm = (props) => {

  const {inputs, handleInputChange, handleSubmit} = useCityLookupForm(props.handleSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>City:</label>
        <input type="text" name="cityName" onChange={handleInputChange} value={inputs.cityName} />
        <label>Last Name</label>
        <input type="text" name="countryName" onChange={handleInputChange} value={inputs.countryName} />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}
export default CityForm;