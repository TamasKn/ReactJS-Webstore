import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shop/Shop'
import Header from './Components/Header/Header'
import SignForms from './Pages/SignForms/SignForms'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignForms} />
      </Switch>
      
    </div>
  );
}

export default App;
