import style from "./NewActivity.module.css";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NewActivity = () => {
  const [actividad, setActividad] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
  });
  const [error, setError] = useState({
    nombre: false,
    dificultad: false,
    duracion: false,
    temporada: false,
  });
  const [message, setMessage] = useState(false);

  const country = useSelector((state) => state.country);

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
      nombre: false,
      dificultad: false,
      duracion: false,
      temporada: false,
    };
    var hasError = false;

    if (!actividad.nombre) {
      hasError = true;
      newError.nombre = true;
    }

    if (!actividad.duracion) {
      hasError = true;
      newError.duracion = true;
    }

    if (!actividad.dificultad) {
      hasError = true;
      newError.dificultad = true;
    }

    if (!actividad.temporada) {
      hasError = true;
      newError.temporada = true;
    }

    console.log(actividad);

    if (hasError) setError(newError);

    if (!hasError) {
      try {
        await axios.post("http://localhost:3001/activities/addActivity", {
          name: actividad.nombre,
          difficulty: actividad.dificultad,
          duration: actividad.duracion,
          season: actividad.temporada,
          country: country.id,
        });
        setMessage(true);
        setTimeout(() => setMessage(false), 2000);
        setActividad({
          nombre: "",
          dificultad: "",
          season: "",
          duracion: "",
          temporada: "",
        });
      } catch (error) {
        window.alert(error.message);
      }
    }
  };

  return (
    <>
      <div className={style.container}>
      <NavLink to={`countries/${country.id}`} className={style.link}><button className={style.button}>Volver</button></NavLink>
        <form className={style.form} onSubmit={submitHandler}>
          <div className={style.two_fields}>
            <div className={style.input_field}>
              <label htmlFor="nombre">Nombre </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={actividad.nombre}
                onChange={handlerChange}
                onFocus={handlerChange}
                style={{
                  border: error.nombre
                    ? "1.5px solid red"
                    : "1.5px solid transparent",
                  outline: "none",
                }}
              />
              {error.nombre && (
                <span className={style.span_error}>
                  Nombre no puede estar vacio!
                </span>
              )}
            </div>

            <div className={style.input_field}>
              <label htmlFor="duracion">Duración (en días) </label>
              <input
                type="number"
                id="duracion"
                name="duracion"
                value={actividad.duracion}
                onChange={handlerChange}
                onFocus={handlerChange}
                style={{
                  border: error.duracion
                    ? "1.5px solid red"
                    : "1.5px solid transparent",
                  outline: "none",
                }}
              />
              {error.duracion && (
                <span className={style.span_error} style={{ right: "-265px" }}>
                  Duracion no puede estar vacio!
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
                name="dificultad"
                value="Pacifica"
                onChange={handlerChange}
              />
              <label htmlFor="pacifica">Pacifica</label>
            </div>

            <div>
              <input
                type="radio"
                id="inspiradora"
                name="dificultad"
                value="Inspiradora"
                onChange={handlerChange}
              />
              <label htmlFor="inspiradora">Inspiradora</label>
            </div>

            <div>
              <input
                type="radio"
                id="desafio"
                name="dificultad"
                value="Desafío"
                onChange={handlerChange}
              />
              <label htmlFor="desafio">Desafío</label>
            </div>

            <div>
              <input
                type="radio"
                id="aventura"
                name="dificultad"
                value="Aventura"
                onChange={handlerChange}
              />
              <label htmlFor="aventura">Aventura</label>
            </div>

            <div style={{ gridColumn: "1 / 3" }}>
              <input
                type="radio"
                id="Actividad Peligrosa"
                name="dificultad"
                value="Actividad Peligrosa"
                onChange={handlerChange}
              />
              <label htmlFor="Actividad Peligrosa">Actividad Peligrosa</label>
            </div>
          </div>
          {error.dificultad && (
            <span
              className={style.span_error}
              style={{ bottom: "155px", right: "-230px" }}
            >
              Dificultad no puede estar vacia!
            </span>
          )}

          <br style={{marginTop: '15px'}}></br>

          <label>Temporada:</label>
          <div className={style.dificulty_container}>
            <div>
              <input
                type="radio"
                id="invierno"
                name="temporada"
                value="Invierno"
                onChange={handlerChange}
              />
              <label htmlFor="invierno">Invierno</label>
            </div>

            <div>
              <input
                type="radio"
                id="otoño"
                name="temporada"
                value="Otoño"
                onChange={handlerChange}
              />
              <label htmlFor="otoño">Otoño</label>
            </div>

            <div>
              <input
                type="radio"
                id="primavera"
                name="temporada"
                value="Primavera"
                onChange={handlerChange}
              />
              <label htmlFor="primavera">Primavera</label>
            </div>

            <div>
              <input
                type="radio"
                id="Veranoa"
                name="temporada"
                value="Verano"
                onChange={handlerChange}
              />
              <label htmlFor="Verano">Verano</label>
            </div>
          </div>
          {error.dificultad && (
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
              error.duracion || error.nombre || error.dificultad || error.temporada
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
