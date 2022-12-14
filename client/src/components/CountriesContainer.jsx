import style from "./CountriesContainer.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../redux/actions";
import Card from "./Card";

const CountriesContainer = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div className={style.container}>
      {countries.length ? (
        countries.map((country) => {
          return (
            <Card 
               flag={country.flag}
               name={country.name}
               capital={country.capital}
               continent={country.continent}
               id={country.id}
            />
          );
        })
      ) : (
        <div className={style.loader}></div>
      )}
    </div>
  );
};

export default CountriesContainer;