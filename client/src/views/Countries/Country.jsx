import style from "./Country.module.css";
import ActivitiesList from "../../components/ActivitiesList";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "../../redux/actions";
import { NavLink } from "react-router-dom";

const Country = (props) => {

  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(props.match.params.id))
  },[])

  return (
    <div className={style.container}>
      <div className={style.card}>
        <h2>{country.name}</h2>
        <h4>{country.capital}</h4>
        <img src={country.flag} alt="bandera del país" />
      </div>
      
      <div className={style.info}>
        <h3>Información del país:</h3>

        <p><b>Nombre Oficial:</b> {country.official_name}</p>
        <p><b>Territorio:</b> {country.area}km2</p>
        <p><b>Continente:</b> {country.continent}</p>
        <p><b>Subregión:</b> {country.subregion}</p>
        <p><b>Población:</b> {country.population}</p>
      </div>

      <div className={style.actividades}>
        <NavLink to="/new-activity" > <button>Agregá una actividad</button> </NavLink>
      </div>

      <div className={style.listaActividades}>
        <ActivitiesList actividades={country.activities} />
      </div>
    </div>
  );
};

export default Country;
