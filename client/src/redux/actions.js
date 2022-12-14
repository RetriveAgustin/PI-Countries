import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";

export const getCountries = () => {
  return function(dispatch){
    fetch("http://localhost:3001/countries")
    .then((response) => {
        return response.json();
    })
    .then((data)=>{
        dispatch({
            type: GET_COUNTRIES,
            payload: data,
        })
    })
    .catch((err) => console.log(err));
  }
};
