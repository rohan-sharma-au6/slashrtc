import React from 'react';
import Sidebar from "./Components/Sidebar"
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dialogue from './pages/Dialogue';


function App() {
  return (
    <div className="App">
      <Sidebar/>
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/dialogue" component={Dialogue}/>
      </Switch>
    </div>
  );
}

export default App;
