import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import {Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
      
    </div>
  );
}

export default App;
