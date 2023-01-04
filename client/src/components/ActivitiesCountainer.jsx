import { NavLink } from "react-router-dom";

const ActivitiesContainer = ({activities}) => {
  console.log(activities);
  return (
    <div>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Dificultad</th>
          <th>Duración</th>
          <th>Temporada</th>
          <th>País</th>
        </tr>
        {activities.map((activity) => {
          return (
            <tr>
              <td>{activity.name}</td>
              <td>{activity.difficulty}</td>
              <td>{activity.duration}</td>
              <td>{activity.season}</td>
              <NavLink to={`/countries/${activity.countries[0].id}`} >
                <td>{activity.countries[0].name}</td>
              </NavLink>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default ActivitiesContainer;