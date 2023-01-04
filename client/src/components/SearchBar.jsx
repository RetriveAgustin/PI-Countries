import style from "./SearchBar.module.css";

import { useDispatch } from "react-redux";
import { getCountries } from "../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(getCountries(e.target.value));
  };

  return (
    <form className={style.contenedor}>
      <input
        className={style.buscador}
        type="text"
        placeholder="Coloca aquí el nombre de la país"
        key="name"
        onChange={changeHandler}
        style={{ marginRight: "60px", marginLeft: "60px" }}
      />
    </form>
  );
};

export default SearchBar;
