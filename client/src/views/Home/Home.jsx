import style from "./Home.module.css";
import Categrories from "../../components/Categories";

const Home = (props) => {
  return (
    <div>
      <div className={style.title}>
        <h1>Bienvenido a la guía turística Countries App</h1>
      </div>
      <div className={style.content}>
        <div className={style.paragraf}>
          <h3>Encontrá tus vacaciones ideales</h3>
          <p>
            Descubrí las distintas actividades que te ofrecen los distintos países y
            planificá tus vacaciones ideales.
            <br />
            Explora nuevas regiones geográficas, descubrí nuevos paisajes y
            extravagantes culturas.
          </p>
        </div>

        <h3>Promociona tus actividades favoritas</h3>
        <p>
          ¿Practicas algún deporte desconocido? ¿Tus pasatiempos no son muy
          conocidos en tu país? ¿Quieres instalar una nueva práctica en tu
          comunidad?
          <br />
          Ahora puedes dar a conocer eso que te apaciona al mundo, y atraer a
          incontables turistas entuciastas a tu país.
          <br /> <br />
          Clasifica tu actividad con nuestros rangos de dificultad para atraer a
          intrépidos aventureros o a tranquilos pasajeros con la misma
          efectividad:
          <Categrories />
        </p>
      </div>
    </div>
  );
};

export default Home;
