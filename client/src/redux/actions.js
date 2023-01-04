import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRY = "GET_COUNTRY";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";

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

export const createActivity = (payload) => {
  return async function() {
    const post = await axios.post("http://localhost:3001/activities/addActivity", payload);
    return post;
  }
}

export const getActivities = () => {
  return function (dispatch) {
    fetch("http://localhost:3001/activities")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_ACTIVITIES,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
}