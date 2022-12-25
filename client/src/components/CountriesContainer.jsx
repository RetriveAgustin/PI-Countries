import style from "./CountriesContainer.module.css";
import Card from "./Card";
import img from "../utils/not_found.png";

const CountriesContainer = ({ countries }) => {
  if (typeof countries === "string") {
    return (
      <div className={style.container}>
        <Card
          flag={img}
          name={"no especificado"}
          capital={"no especificado"}
          continent={"no especificado"}
          id={null}
        />
      </div>
    );
  } else {
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
  }
};

export default CountriesContainer;
