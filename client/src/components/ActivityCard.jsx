const ActivityCard = ({ name, difficulty, duration, season }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{difficulty}</td>
      {
        duration <= 1 ?
          <td>{duration} día</td>
        :
          <td>{duration} días</td>
      }
      <td>{season}</td>
    </tr>
  );
};

export default ActivityCard;
