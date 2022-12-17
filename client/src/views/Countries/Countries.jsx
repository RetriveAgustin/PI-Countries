import styles from "./Countries.module.css";
import CountriesContainer from "../../components/CountriesContainer";
import Paginated from "../../components/Paginated";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";

const Countries = () => {
  const [ page, setPage ] = useState(1);
  const endPos = page === 1? 9 : (page*10)-1;
  const startPos = endPos - (page===1? 9: 10);
  var countries = useSelector((state) => state.countries);
  const countriesToShow = countries.slice(startPos, endPos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <div>
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
