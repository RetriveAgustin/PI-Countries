import style from "./CountriesContainer.module.css";
import Card from "./Card";

const CountriesContainer = ({countries}) => {
  

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