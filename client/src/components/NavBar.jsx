import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = (props) => {
  return <div className={style.navBarContainer}>
    <p><NavLink className={style.linkText} to="/">Home</NavLink></p>
    <p><NavLink className={style.linkText} to="/countries">Países</NavLink></p>
    <p><NavLink className={style.linkText} to="/activities">Actividades</NavLink></p>
  </div>;
};

export default NavBar;
