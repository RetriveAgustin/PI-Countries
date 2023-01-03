import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY,
  POST_ACTIVITY
} from "./actions";

const initialState = {
  countries: [],
  country: {},
  activities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case POST_ACTIVITY:
      return {
        ...state,
      }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
