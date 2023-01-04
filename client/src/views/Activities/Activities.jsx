import ActivitiesContainer from "../../components/ActivitiesCountainer";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";
import Paginated from "../../components/Paginated";

const Activities = (props) => {
  const [page, setPage] = useState(1);
  const endPos = page * 10 - 1;
  const startPos = endPos - 10;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getActivities(""));
  }, []);
  
  var activities = useSelector((state) => state.activities);

  const [order, setOrder] = useState("asc");

  if (order === "asc") {
    activities = activities.sort((a, b) => (a.name < b.name ? 1 : -1));
  } else {
    activities = activities.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  const activitiesToShow = activities.slice(startPos, endPos);
  
  console.log(activitiesToShow);

  return (
    <div className="activitiesContainer">
      <p>Orden Alfabético:</p>
      <button onClick={() => setOrder("asc")}>Ascendente</button>
      <button onClick={() => setOrder("des")}>Descendente</button>

      <Paginated
        actualPage={page}
        setPage={setPage}
        pages={activities?.length / 10}
      />

      <div>
        <ActivitiesContainer activities={activitiesToShow} />
      </div>
    </div>
  );
};

export default Activities;
