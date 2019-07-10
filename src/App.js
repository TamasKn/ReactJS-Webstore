import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shop/Shop'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
      
    </div>
  );
}

export default App;
