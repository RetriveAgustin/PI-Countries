import style from "./Activities.module.css";
import ActivitiesContainer from "../../components/ActivitiesCountainer";
import Paginated from "../../components/Paginated";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";

const Activities = () => {
  const [searchBar, setSearchBar] = useState("");
  const searchChangeHandle = (e) => {
    setSearchBar(e.target.value);
  }

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
          countryName: country.name,
          countryId: country.id,
        };
      });
    })
  );

  var activities = [];
  activitiesAux.forEach((activitiesA)=> activities = [...activities, ...activitiesA]);
  if(searchBar)
    activities = activities.filter(activity => {
      return activity.countryName.slice(0, searchBar.length).toLowerCase() === searchBar.toLocaleLowerCase();
    });

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
      <div className={style.header}>
        <div style={{margin: "auto 0", marginRight: "10px"}}>
          <input
            type="text"
            placeholder="Coloca aquí el nombre del país"
            key="name"
            onChange={searchChangeHandle}
            className={style.input}
          />
        </div>

        <div className={style.order}>
          <p>Orden Alfabético:</p>
          <button onClick={() => setOrder("asc")}>Ascendente</button>
          <button onClick={() => setOrder("des")}>Descendente</button>
        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px"
      }}>
        <Paginated
          actualPage={page}
          setPage={setPage}
          pages={activities.length / 15}
        />
      </div>

      <div style={{
        width: "99%",
        margin: "0 auto"
      }}>
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
