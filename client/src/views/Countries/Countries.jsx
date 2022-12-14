import styles from "./Countries.module.css";
import CountriesContainer from "../../components/CountriesContainer";

const Countries = (props) => {
  return (
    <div className={styles.container}>
      <h2>Listado de Países</h2>
      <div>
        <CountriesContainer />
      </div>
    </div>
  );
};

export default Countries;
