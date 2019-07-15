import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shop/Shop'
import Header from './Components/Header/Header'
import SignForms from './Pages/SignForms/SignForms'
import { auth, createUser } from './Firebase/Firebase.utils'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      userData: null
    }
  }

  unsubscribeAuth = null

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {

        const userRef = await createUser(userAuth)

        userRef.onSnapshot(snap => {
          this.setState({
            userData: {
              id: snap.id,
              ...snap.data()
            }
          })
        })
      }
      this.setState({userData: userAuth})
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
