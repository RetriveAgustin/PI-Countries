import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ flag, name, capital, continent, id }) => {
  return (
    <NavLink to={`/countries/${id}`} className={style.link}>
        <div className={style.card}>
        <h4 className={style.content}>{name}</h4>
        <img src={flag} alt={`bandera de ${name}`} />
        <p className={style.content}><b>Capital:</b> {capital}</p>
        <p className={style.content}> <b>Continente:</b> {continent}</p>
        </div>
    </NavLink>
  );
};

export default Card;
