import ActivitiesContainer from "../../components/ActivitiesCountainer";
import Paginated from "../../components/Paginated";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";

const Activities = () => {
  const [page, setPage] = useState(1);
  const endPos =page * 15 ;
  const startPos = endPos - 15;
  var activitiesAux = useSelector((state) =>
    state.activities.map((activity) => {
      return activity.countries.map((country) => {
        return {
          name: activity.name,
          difficulty: activity.difficulty,
          duration: activity.duration,
          season: activity.season,
          crountryName: country.name,
          countryId: country.id,
        };
      });
    })
  );

  var activities = [];

  for (var i = 0; i < activitiesAux.length; i++) {
    activities = [...activities, ...activitiesAux[i]];
  }

  console.log(activities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities(""));
  }, []);

  const [order, setOrder] = useState("asc");

  if (order === "asc") {
    activities = activities.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else {
    activities = activities.sort((a, b) => (a.name < b.name ? 1 : -1));
  }

  const activitiesToShow = activities.slice(startPos, endPos);

  // console.log(activitiesToShow);

  return (
    <div className="activitiesContainer">
      <p>Orden Alfabético:</p>
      <button onClick={() => setOrder("asc")}>Ascendente</button>
      <button onClick={() => setOrder("des")}>Descendente</button>

      <Paginated
        actualPage={page}
        setPage={setPage}
        pages={activities.length / 15}
      />

      <div>
        <table>
          <tr>
            <th>Nombre</th>
            <th>Dificultad</th>
            <th>Duración</th>
            <th>Temporada</th>
            <th>País</th>
          </tr>
          {activitiesToShow.map((activity) => (
              <ActivitiesContainer activity={activity} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Activities;
