import './App.css';
import { Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./views/Home/Home";
import Countries from "./views/Countries/Countries";
import Country from "./views/Countries/Country";
import Activities from "./views/Activities/Activities";
import Activity from './views/Activities/Avtivity';
import NewActivity from './views/Activities/NewActivity';

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/countries" component={Countries} />
      <Route exact path="/countries/:id" component={Country} />
      <Route exact path="/activities" component={Activities} />
      <Route exact path="/activity" component={Activity} />
      <Route exact path="/new-activity/:id" component={NewActivity} />
    </div>
  );
}

export default App;
