import style from "./SearchBar.module.css";

import { useDispatch } from "react-redux";
import { getCountries } from "../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(getCountries(e.target.value));
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  // }

  return (
    <form className={style.container} /*onSubmit={submitHandler}*/>
      <input
        className={style.input}
        type="text"
        placeholder="Coloca aquí el nombre de la país"
        key="name"
        onChange={changeHandler}
      />
      {/* <input type="submit" className={style.btn} key="submit" value="Buscar" /> */}
    </form>
  );
};

export default SearchBar;
