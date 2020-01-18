import React, {useState} from 'react';

const useCityLookupForm = (submitCallback) => {
  const [inputs, setInputs] = useState({
    cityName: '',
    countryName: ''
 });;
  
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    submitCallback(inputs);
    setInputs(() => ({
      cityName: '',
      countryName: ''
    }));
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