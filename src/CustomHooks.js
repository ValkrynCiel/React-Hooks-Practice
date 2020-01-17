import React, {useState} from 'react';

const useCityLookupForm = (callback) => {
  const [inputs, setInputs] = useState({
    cityName: '',
    countryName: ''
 });;
  
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export default useCityLookupForm;