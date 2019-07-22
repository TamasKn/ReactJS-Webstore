import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shop/Shop'
import Header from './Components/Header/Header'
import SignForms from './Pages/SignForms/SignForms'
import { auth, createUser } from './Firebase/Firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from './Redux/UserReducer/UserAction'
import { createStructuredSelector } from 'reselect'
import { selectUser } from './Redux/UserReducer/UserSelectors'

class App extends React.Component {

  unsubscribeAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {

        const userRef = await createUser(userAuth)

        userRef.onSnapshot(snap => {
          setCurrentUser({
              id: snap.id,
              ...snap.data()
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  // To avoid data leak
  componentWillUnmount() {
    this.unsubscribeAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/signin' render={ 
			  () => this.props.userData 
			  	? (<Redirect to='/' />) 
				: (<SignForms />) 
				}
			/>
        </Switch>
        
      </div>
    );
  }
  
}

const mapState = createStructuredSelector({
  userData: selectUser
})

const mapDispatch = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapState, mapDispatch)(App);
