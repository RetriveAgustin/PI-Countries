import style from "./Categories.module.css";
import peces from "../utils/peces_koi.png";
import bonzai from "../utils/bonzai.png";
import caminante from "../utils/caminante.png";
import montaña from "../utils/montana.png";
import tigre from "../utils/tigre.png";

const Categrories = () => {
  return (
    <div className={style.categories}>
      <div className={style.cat}>
        <p>
          <b>Pacífico:</b> toda aquella actividad que no requiere un esfuerzo
          activo de parte del participante, ideal para aquellos que deseen
          explorar nuevos métodos de abstracción del estrés, conocer nuevas
          formas de arte, o degustar aquello que tu país tiene para ofrecer.
        </p>
        <div className={style.pac}>
          <img src={peces} alt="pacific activity" />
        </div>
      </div>

      <div className={style.cat}>
        <p>
          <b>Inspirador:</b> en esta categoría se ofrecen alternativas más
          activas, que requieren más implicación por parte del participante, que
          busca retornar de su viaje con nuevos conocimientos, cantos y paisajes
          que de tu patria se llevará.
        </p>
        <div className={style.ins}>
          <img src={bonzai} alt="inspiring activity" />
        </div>
      </div>

      <div className={style.cat}>
        <p>
          <b>Desafío:</b> quienes no teman a ensuciarse las manos se verán
          ciertamente atraídos a esta categoría, aquí los participantes tendrán
          un grado de participación más activa, teniendo que enfrentarse a las
          dificultades que tu actividad represente.
        </p>
        <div className={style.des}>
          <img src={caminante} alt="challenging activity" />
        </div>
      </div>

      <div className={style.cat}>
        <p>
          <b>Aventura:</b> saltar al vacío desde una aeronave, practicar rapel
          desde la cumbre de un precipicio, o explorar una ciudad fantasma.
          Todas estas actividades buscan satisfacer a los que quieran poner a
          prueba sus límites, y volver a casa con grandes experiencias y
          anécdotas para compartir de sus triunfos.
        </p>
        <div className={style.ave}>
          <img src={montaña} alt="Adventure activity" />
        </div>
      </div>

      <div>
        <p>
          <b>Actividad Peligrosa:</b> stas actividades requieren el pleno uso de
          las facultades de los participantes. Pensadas para temerarios, imponen
          un considerable peligro para quienes deciden enfrentarlas. Desde
          trepar las más altas montañas, hasta buzear por las mayores
          profundidades conocidas por el hombre, pasando por la caza de los
          depredadores más peligrosos de la sabana, o la exploración de las más
          densas junglas, ningúna de estas actidades es apta para los fácilmente
          intimidables.
        </p>
        <div className={style.pel}>
          <img src={tigre} alt="dangerous activity" />
        </div>
      </div>
    </div>
  );
};

export default Categrories;
