import ActivityCard from "./ActivityCard";
import style from "./ActivitiesList.module.css";

const ActivitiesList = ({ actividades }) => {
  return (
    <table>
      <tr>
        <th>Actividad</th>
        <th>Dificultad</th>
        <th>Duración</th>
        <th>Temporada</th>
      </tr>
      {actividades && actividades.length ? (
        actividades.map(({ name, difficulty, duration, season }) => {
          return (
            <ActivityCard
              name={name}
              difficulty={difficulty}
              duration={duration}
              season={season}
            />
          );
        })
      ) : (
        <p style={{color: "black"}}>No hay actividades registradas para este país</p>
      )}
    </table>
  );
};

export default ActivitiesList;
