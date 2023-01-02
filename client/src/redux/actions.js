export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRY = "GET_COUNTRY";

export const getCountries = (name = "") => {
  if (!name) {
    return function (dispatch) {
      fetch("http://localhost:3001/countries")
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: GET_COUNTRIES,
            payload: data,
          });
        })
        .catch((err) => console.log(err));
    };
  } else {
    return function (dispatch) {
      fetch(`http://localhost:3001/countries?name=${name}`)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: GET_COUNTRIES_BY_NAME,
            payload: data,
          });
        })
        .catch((err) => console.log(err));
    };
  }
};

export const getCountry = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_COUNTRY,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};