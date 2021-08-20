import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from "./components/Header";
import WatchList from './components/WatchList'
import Watched from './components/Watched'
import {Add} from './components/Add'

import GlobalProvider from "./components/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><WatchList/></Route>
          <Route exact path="/watched"><Watched/></Route>
          <Route exact path="/add"><Add/></Route>
        </Switch>
      </Router>
      </GlobalProvider>
  );
}

export default App;
