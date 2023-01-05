import { NavLink } from "react-router-dom";

const ActivitiesContainer = ({ activity }) => {
  return (
    <tr>
      <td>{activity.name}</td>
      <td>{activity.difficulty}</td>
      <td>{activity.duration}</td>
      <td>{activity.season}</td>
      <NavLink to={`/countries/${activity.countryId}`}>
        <td>{activity.countryName}</td>
      </NavLink>
    </tr>
  );
};

export default ActivitiesContainer;
