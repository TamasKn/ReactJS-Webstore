import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shop/Shop'
import Header from './Components/Header/Header'
import SignForms from './Pages/SignForms/SignForms'
import { auth } from './Firebase/Firebase.utils'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      userData: null
    }
  }

  unsubscribeAuth = null

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({userData: user})
    })
  }

  // To avoid data leak
  componentWillUnmount() {
    this.unsubscribeAuth()
  }

  render() {
    return (
      <div>
        <Header userData={this.state.userData} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignForms} />
        </Switch>
        
      </div>
    );
  }
  
}

export default App;
