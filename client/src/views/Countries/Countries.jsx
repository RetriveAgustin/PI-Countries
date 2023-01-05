import styles from "./Countries.module.css";
import CountriesContainer from "../../components/CountriesContainer";
import Paginated from "../../components/Paginated";
import SearchBar from "../../components/SearchBar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";

const Countries = () => {
  // PAGINADO
  const [ page, setPage ] = useState(1);
  const endPos = page === 1? 9 : (page*10)-1;
  const startPos = endPos - (page===1? 9: 10);
  var countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  console.log(countries);
  
  useEffect(() => {
    dispatch(getCountries(""));
  }, []);

  // FILTRADO POR CONTINENTE
  const [continent, setContinent] = useState("");
  const handleContinent = (e) => {
    console.log(e.target.value);
    setContinent(e.target.value)
  }
  if(continent)
    countries = countries.filter(country => {
      return country.continent[0] === continent;
    });
  console.log(countries);
  
  // ORDENADO ALFABÉTICO
  const [order, setOrder] = useState("alfAsc");
  
  if(order === 'alfAsc' && typeof(countries) !== "string"){
    countries = countries.sort((a,b)=> a.name>b.name? 1:-1);
  }
  else if(order === "alfDes" && typeof(countries) !== "string")
    countries = countries.sort((a,b)=> a.name<b.name? 1:-1);
  else if(order === "popAsc" && typeof(countries) !== "string")
    countries = countries.sort((a,b)=> a.population<b.population? 1:-1);
  else if(typeof(countries) !== "string")
    countries = countries.sort((a,b)=> a.population>b.population? 1:-1);
  
  const countriesToShow = countries.slice(startPos, endPos);
  
  return (
    <div>
      <div className={styles.header}>
        <p>Orden Alfabético:</p>
        <button onClick={()=>setOrder("alfAsc")}>Ascendente</button>
        <button onClick={()=>setOrder("alfDes")}>Descendente</button>

        <SearchBar />

        <p>Ordernar por Población:</p>
        <button onClick={()=>setOrder("popAsc")}>Mayor-Menor</button>
        <button onClick={()=>setOrder("popDes")}>Menor-Mayor</button>
      </div>

      <div className={styles.continentFilter}>
        <p style={{margin: "auto 0", marginRight: "10px"}}>Seleccione un Continente</p>
        <select name="continent" onChange={handleContinent} id="continent">
          <option value="">Sin Filtro</option>
          <option value="Africa">Africa</option>
          <option value="North America">America del Norte</option>
          <option value="South America">America del Sur</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceanía</option>
        </select>
      </div>

      <div className={styles.container}>
        <h2>Listado de Países</h2>
        <Paginated actualPage={page} setPage={setPage} pages={(countries?.length/9.99)}/>
        <div>
          <CountriesContainer countries={countriesToShow} />
        </div>
      </div>
    </div>
  );
};

export default Countries;
