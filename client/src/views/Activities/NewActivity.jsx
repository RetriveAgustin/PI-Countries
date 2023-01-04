import style from "./NewActivity.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity, getCountries } from "../../redux/actions";
import { useParams } from "react-router-dom";

const NewActivity = () => {
  //PARAM DEFINE SI EL FORM FUE LLAMADO DESDE UNA CARD O DESDE EL NAV
  const param = useParams()
  const [actividad, setActividad] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    //si params devuelve "create" fue llamada desde el NavBar
    //si no, params contiene el id de un país
    countries: param.id === "create" ? [] : [param.id],
  });

  //MANEJO DE ERRORES
  const [error, setError] = useState({
    name: false,
    difficulty: false,
    duration: false,
    season: false,
  });
  const [message, setMessage] = useState(false);

  //traigo los países para el select
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  },[]);

  //los ordeno para que queden las opciones en orden alfabético
  let countries = useSelector((state) => state.countries)
    .sort((a,b)=> a.name>b.name? 1:-1);
  countries.unshift({
    id: null,
    name: "Seleccione un país"});

  function handlerChange({ target }) {
    setActividad({
      ...actividad,
      [target.name]: target.value,
    });

    if (!target.value)
      setError({
        ...error,
        [target.name]: true,
      });
    else
      setError({
        ...error,
        [target.name]: false,
      });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const newError = {
      name: false,
      difficulty: false,
      duration: false,
      season: false,
      countries: false,
    };
    var hasError = false;

    if (!actividad.name) {
      hasError = true;
      newError.name = true;
    }

    if (!actividad.duration) {
      hasError = true;
      newError.duration = true;
    }

    if (!actividad.difficulty) {
      hasError = true;
      newError.difficulty = true;
    }

    if (!actividad.season) {
      hasError = true;
      newError.season = true;
    }

    if (!actividad.countries.length) {
      hasError = true;
      newError.countries = true;
    }

    if (hasError) setError(newError);
    

    if (!hasError) {
      try {
        dispatch(createActivity(actividad));

        setMessage(true);
        setTimeout(() => setMessage(false), 2000);
        setActividad({
          name: "",
          difficulty: "",
          season: "",
          duration: "",
          season: "",
          countries: param.id === "create" ? [] : [param.id],
        });
      } catch (error) {
        window.alert(error.message);
      }
    }
  };

  const handleSelect = (e) => {
    if(e.target.value !== "Seleccione un país"){
      setActividad({
        ...actividad,
        countries: [...actividad.countries, e.target.value]
      })
    }
  }

  return (
    <>
      <div className={style.container}>
        {/* <NavLink to={`countries/${country.id}`} className={style.link}><button className={style.button}>Volver</button></NavLink> */}
        <form className={style.form} onSubmit={submitHandler}>
          <div className={style.two_fields}>
            <div className={style.input_field}>
              <label htmlFor="name">Nombre </label>
              <input
                type="text"
                id="name"
                name="name"
                value={actividad.name}
                onChange={handlerChange}
                onFocus={handlerChange}
                style={{
                  border: error.name
                    ? "1.5px solid red"
                    : "1.5px solid transparent",
                  outline: "none",
                }}
              />
              {error.name && (
                <span className={style.span_error}>
                  Nombre no puede estar vacio!
                </span>
              )}
            </div>

            <div className={style.input_field}>
              <label htmlFor="duration">Duración (en días) </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={actividad.duration}
                onChange={handlerChange}
                onFocus={handlerChange}
                style={{
                  border: error.duration
                    ? "1.5px solid red"
                    : "1.5px solid transparent",
                  outline: "none",
                }}
              />
              {error.duration && (
                <span className={style.span_error} style={{ right: "-265px" }}>
                  Duracion no puede estar vacio!
                </span>
              )}
            </div>

            <div className={style.input_field}>
              <label htmlFor="countries">País/es</label>
              <input
                type="text"
                id="countries"
                name="countries"
                value={actividad.countries}
                style={{
                  border: error.countries
                    ? "1.5px solid red"
                    : "1.5px solid transparent",
                  outline: "none",
                }}
              />
              <select onChange={e => handleSelect(e)}>
                {
                  countries.map((country) => <option value={country.id}>{country.name}</option>)
                }                
              </select>
              {error.duration && (
                <span className={style.span_error} style={{ right: "-265px"}}>
                  País/es no puede estar vacio!
                </span>
              )}
            </div>
          </div>

          <label>Dificultad:</label>

          <div className={style.dificulty_container}>
            <div>
              <input
                type="radio"
                id="pacifica"
                name="difficulty"
                value="Pacifica"
                onChange={handlerChange}
              />
              <label htmlFor="pacifica">Pacifica</label>
            </div>

            <div>
              <input
                type="radio"
                id="inspiradora"
                name="difficulty"
                value="Inspiradora"
                onChange={handlerChange}
              />
              <label htmlFor="inspiradora">Inspiradora</label>
            </div>

            <div>
              <input
                type="radio"
                id="desafio"
                name="difficulty"
                value="Desafío"
                onChange={handlerChange}
              />
              <label htmlFor="desafio">Desafío</label>
            </div>

            <div>
              <input
                type="radio"
                id="aventura"
                name="difficulty"
                value="Aventura"
                onChange={handlerChange}
              />
              <label htmlFor="aventura">Aventura</label>
            </div>

            <div style={{ gridColumn: "1 / 3" }}>
              <input
                type="radio"
                id="Actividad Peligrosa"
                name="difficulty"
                value="Actividad Peligrosa"
                onChange={handlerChange}
              />
              <label htmlFor="Actividad Peligrosa">Actividad Peligrosa</label>
            </div>
          </div>
          {error.difficulty && (
            <span
              className={style.span_error}
              style={{ bottom: "155px", right: "-230px" }}
            >
              Dificultad no puede estar vacia!
            </span>
          )}

          <br style={{ marginTop: "15px" }}></br>

          <label>Temporada:</label>
          <div className={style.dificulty_container}>
            <div>
              <input
                type="radio"
                id="invierno"
                name="season"
                value="Invierno"
                onChange={handlerChange}
              />
              <label htmlFor="invierno">Invierno</label>
            </div>

            <div>
              <input
                type="radio"
                id="otoño"
                name="season"
                value="Otoño"
                onChange={handlerChange}
              />
              <label htmlFor="otoño">Otoño</label>
            </div>

            <div>
              <input
                type="radio"
                id="primavera"
                name="season"
                value="Primavera"
                onChange={handlerChange}
              />
              <label htmlFor="primavera">Primavera</label>
            </div>

            <div>
              <input
                type="radio"
                id="Veranoa"
                name="season"
                value="Verano"
                onChange={handlerChange}
              />
              <label htmlFor="Verano">Verano</label>
            </div>
          </div>
          {error.difficulty && (
            <span
              className={style.span_error}
              style={{ bottom: "80px", right: "-245px" }}
            >
              Temporada no puede estar vacia!
            </span>
          )}

          <input
            type="submit"
            value="Crear Actividad"
            className={style.btn_submit}
            style={
              error.duration ||
              error.name ||
              error.difficulty ||
              error.season
                ? {
                    cursor: "not-allowed",
                  }
                : {}
            }
          />
        </form>
      </div>
      {message && (
        <span
          className={style.span_error}
          style={{
            bottom: "20px",
            left: "20px",
            backgroundColor: "green",
            width: "fit-content",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 2px 4px, rgba(0, 0, 0, 0.23) 0px 2px 4px",
          }}
        >
          Actividad creada correctamente!
        </span>
      )}
    </>
  );
};

export default NewActivity;
